export interface PersonApi {
  url: string;
  name: string;
  gender: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  homeworld?: string;
  films?: string[];
  vehicles?: string[];
}

export interface Person {
  id: number | null;
  url: string;
  name: string;
  gender: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  homeworld: string;
  films: string;
  vehicles: string;
}
