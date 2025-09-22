import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseURL } from './API-baseURL';
import type { PersonApi, Person } from '@/types/person';
import { idFromUrl } from '@/utils/helpers';

// normalise PersonApi -> Person ( with resolved values if already available)
const toPerson = (api: PersonApi): Person => ({
  id: idFromUrl(api.url),
  name: api.name,
  gender: api.gender,
  height: api.height,
  mass: api.mass,
  hairColor: api.hair_color,
  skinColor: api.skin_color,
  eyeColor: api.eye_color,
  birthYear: api.birth_year,
  homeworld: api.homeworld ?? '',
  films: api.films ?? [],
  vehicles: api.vehicles ?? [],
});

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseURL }),
  endpoints: (builder) => ({
    getAllPeople: builder.query<Person[], void>({
      query: () => 'people',
      transformResponse: (response: PersonApi[]) => {
        return response.map((p) => toPerson(p));
      },
    }),
    getPersonById: builder.query<Person | null, number>({
      async queryFn(id, _api, _extra, baseQuery) {
        try {
          const response = await baseQuery({ url: `people/${id}` });
          if (response.error) return { error: response.error };
          const apiResult = response.data as PersonApi | null;
          if (!apiResult) {
            throw new Response('Not Found', { status: 404 });
          }
          if (!apiResult) return { error: { status: 404, data: 'Not Found' } };

          const base = toPerson(apiResult);

          // Homeworld
          if (apiResult.homeworld) {
            const homeworldData = await baseQuery({
              url: apiResult.homeworld.replace(apiBaseURL, ''),
            });
            if ((homeworldData as { error?: unknown }).error) {
              base.homeworld = 'Unknown';
            } else {
              base.homeworld =
                ((homeworldData as { data: unknown }).data as { name?: string })
                  ?.name ?? 'Unknown';
            }
          } else {
            base.homeworld = 'Unknown';
          }

          // Films
          if (Array.isArray(apiResult.films) && apiResult.films.length) {
            const filmsTitles = await Promise.all(
              apiResult.films.map(async (url) => {
                const filmsData = await baseQuery({
                  url: url.replace(apiBaseURL, ''),
                });
                return filmsData?.error
                  ? 'N/A'
                  : (filmsData.data as { title: string }).title;
              })
            );
            base.films = filmsTitles;
          } else {
            base.films = ['Unknown'];
          }

          // Vehicles
          if (Array.isArray(apiResult.vehicles) && apiResult.vehicles.length) {
            const names = await Promise.all(
              apiResult.vehicles.map(async (url) => {
                const vehicleData = await baseQuery({
                  url: url.replace(apiBaseURL, ''),
                });
                return vehicleData.error
                  ? 'N/A'
                  : (vehicleData.data as { name: string }).name;
              })
            );
            base.vehicles = names;
          } else {
            base.vehicles = ['Unknown'];
          }
          return { data: base };
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(`Failed to fetch person with ID ${id}:`, error);
          const errorMessage =
            error instanceof Error ? error.message : String(error);
          throw new Error(
            `Failed to fetch person with ID ${id}: ${errorMessage}`
          ) as Error;
        }
      },
    }),
  }),
});

export const { useGetAllPeopleQuery, useGetPersonByIdQuery } = peopleApi;
