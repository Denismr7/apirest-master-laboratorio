import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './hotel-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id,
  image: character.image,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender
});
