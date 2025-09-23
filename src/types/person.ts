export type PersonApi = {
  url: string;
  name: string;
  height: string;
  gender: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  homeworld?: string | null;
  films?: string[] | null;
  vehicles?: string[] | null;
};

// Person = PersonApi without "url" replace by"id" extracted from "url"
export type Person = Omit<PersonApi, 'url'> & {
  id: number;
};
