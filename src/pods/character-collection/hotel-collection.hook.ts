import * as React from 'react';
import { CharacterEntityVm } from './hotel-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './hotel-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return { characterCollection: characterCollection, loadCharacterCollection: loadCharacterCollection };
};
