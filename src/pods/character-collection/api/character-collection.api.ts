import { CharacterEntityApi, ApiResponse } from './character-collection.api-model';
import { postData } from 'common/services/';

let characterApiUrl = "https://rickandmortyapi.com/api/character";
let collectionJsonServer = "http://localhost:3000/actors";

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  let characterCollection: Promise<CharacterEntityApi[]> = await fetch(characterApiUrl).then(rsp => rsp.json()).then(data => data["results"]).catch(e => console.log(e));
  let actorsCollection = await fetch(collectionJsonServer).then(rsp => rsp.json()).then(data => data).catch(e => console.log(e));
  return actorsCollection;
};

export const deleteHotel = async (id: number): Promise<boolean> => {
  return true;
};
