import { Lookup } from 'common/models';
import { CharacterEntityApi } from 'pods/character-collection/api';

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const characterUrl = `${baseUrl}/${id}`;
  const character: Promise<CharacterEntityApi> = await fetch(characterUrl).then(rsp => rsp.json()).then(data => data).catch(e => console.log(e));
  return character;
};

export const saveCharacter = async (character: CharacterEntityApi): Promise<boolean> => {
  return true;
};
