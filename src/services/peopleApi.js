import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseURL } from './API-baseURL';

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseURL }),
  endpoints: (builder) => ({
    getAllPeople: builder.query({
      query: () => 'people',
      transformResponse: (response) => {
        const allPeople = response;
        const characters = allPeople.map((person) => {
          const idMatch = person.url.match(/people\/(\d+)/);
          return {
            id: idMatch ? Number(idMatch[1]) : null,
            ...person,
          };
        });
        return characters;
      },
    }),
    getPersonById: builder.query({
      async queryFn(id, _api, _extraOptions, baseQuery) {
        try {
          const response = await baseQuery({ url: `people/${id}` });
          if (response.error) return { error: response.error };
          const person = response.data;
  
          // extract ID and person
          const idMatch = person.url.match(/people\/(\d+)/);
          const result = {
            id: idMatch ? Number(idMatch[1]) : null,
            ...person,
          };
  
          // Homeworld
          if (person.homeworld) {
            const homeworldData = await baseQuery({
              url: person.homeworld.replace(apiBaseURL, ''),
            });
            result.homeworld = homeworldData.error
              ? 'Unknown'
              : homeworldData.data.name;
          } else {
            result.homeworld = 'Unknown';
          }
  
          // Films
          if (Array.isArray(person.films) && person.films.length) {
            const filmsTitles = await Promise.all(
              person.films.map(async (url) => {
                const f = await baseQuery({ url: url.replace(apiBaseURL, '') });
                return f.error ? 'N/A' : f.data.title;
              })
            );
            result.films = filmsTitles.join(', ');
          } else {
            result.films = 'Unknown';
          }
  
          // Vehicles
          if (Array.isArray(person.vehicles) && person.vehicles.length) {
            const names = await Promise.all(
              person.vehicles.map(async (url) => {
                const vehicleData = await baseQuery({
                  url: url.replace(apiBaseURL, ''),
                });
                return vehicleData.error ? 'N/A' : vehicleData.data.name;
              })
            );
            result.vehicles = names.join(', ');
          } else {
            result.vehicles = 'Unknown';
          }
          return { data: result };
          
        } catch (error) {
          throw new Error(`Failed to fetch person with ID ${id}: ${error.message}`);
        }
      },
    }),
  }),
});

export const { useGetAllPeopleQuery, useGetPersonByIdQuery } = peopleApi;
