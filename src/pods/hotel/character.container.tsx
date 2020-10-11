import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './hotel.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './hotel.mappers';
import { Lookup } from 'common/models';
import { HotelComponent } from './character.component';

export const HotelContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (character: Character) => {
    const apiHotel = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiHotel);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save hotel');
    }
  };

  return <HotelComponent character={character} onSave={handleSave} />;
};
