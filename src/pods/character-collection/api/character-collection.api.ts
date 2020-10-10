import { CharacterEntityApi } from './character-collection.api-model';

let characterApiUrl = "https://rickandmortyapi.com/api/character";

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  let characterCollection: Promise<CharacterEntityApi[]> = await fetch(characterApiUrl).then(rsp => rsp.json()).then(data => data["results"]).catch(e => console.log(e));
  return characterCollection;
};

export const deleteHotel = async (id: number): Promise<boolean> => {
  return true;
};
