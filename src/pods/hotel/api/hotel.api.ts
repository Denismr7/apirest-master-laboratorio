import { Lookup } from 'common/models';
import { CharacterEntityApi } from 'pods/character-collection/api';
import { postData } from '../../../common/services';

const baseUrl = "http://localhost:3000/actors";

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const characterUrl = `${baseUrl}/${id}`;
  const character: Promise<CharacterEntityApi> = await fetch(characterUrl).then(rsp => rsp.json()).then(data => data).catch(e => console.log(e));
  return character;
};

export const saveCharacter = async (character: CharacterEntityApi): Promise<boolean> => {
  if (character.id) {
    const url = `${baseUrl}/${character.id}`
    postData(url, {...character}, "PUT")
  }
  return true;
};
