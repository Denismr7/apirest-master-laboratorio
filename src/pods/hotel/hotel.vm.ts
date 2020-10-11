import { Origin, CharacterLocation } from "pods/character-collection/api";

export interface Character {
  id: number;
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: Origin,
  location: CharacterLocation,
  image: string,
  episode: string[],
  url: string,
  created: string
}

export const createEmptyCharacter = (): Character => ({
  id: undefined,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: ''
  },
  location: {
    name: '',
    url: ''
  },
  image: '',
  episode: [],
  url: '',
  created: '',
});
