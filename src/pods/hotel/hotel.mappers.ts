import * as viewModel from './hotel.vm';
import { CharacterEntityApi } from 'pods/character-collection/api';

export const mapCharacterFromApiToVm = (
  character: CharacterEntityApi
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  country: character.country,
  gender: character.gender,
  comment: character.comment
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): CharacterEntityApi =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    country: character.country,
    gender: character.gender,
    comment: character.comment
  } as unknown) as CharacterEntityApi);
