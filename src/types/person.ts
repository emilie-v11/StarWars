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

export type Person = {
  id: number | null;
  url?: string;
  name: string;
  height: string;
  gender: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  homeworld: string | null;
  films: string[] | null;
  vehicles: string[] | null;
};
