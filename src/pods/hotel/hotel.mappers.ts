import * as viewModel from './hotel.vm';
import { CharacterEntityApi } from 'pods/character-collection/api';

export const mapCharacterFromApiToVm = (
  character: CharacterEntityApi
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin,
  location: character.location,
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): CharacterEntityApi =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: character.origin,
    location: character.location,
    image: character.image,
    episode: character.episode,
    url: character.url,
    created: character.created
  } as unknown) as CharacterEntityApi);
