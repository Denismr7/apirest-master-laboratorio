import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteHotel } from './api';
import { useCharacterCollection } from './hotel-collection.hook';
import { CharacterCollectionComponent } from './hotel-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection: hotelCollection, loadCharacterCollection: loadCharacterCollection } = useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateCharacter = () => {
    history.push(linkRoutes.createHotel);
  };

  const handleEdit = (id: number) => {
    history.push(linkRoutes.editHotel(id));
  };

  const handleDelete = async (id: number) => {
    await deleteHotel(id);
    loadCharacterCollection();
  };

  return (
    <CharacterCollectionComponent
      characterCollection={hotelCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
