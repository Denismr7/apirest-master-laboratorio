import { Origin, CharacterLocation } from "pods/character-collection/api";

export interface Character {
  id: number;
  name: string,
  country: string,
  comment: string,
  gender: string
}

export const createEmptyCharacter = (): Character => ({
  id: undefined,
  name: '',
  country: '',
  comment: '',
  gender: ''
});
