import React, { ChangeEvent } from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './hotel.validations';
import { Character } from './hotel.vm';
import * as classes from './hotel.styles';
import { postData } from 'common/services';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const HotelComponent: React.FunctionComponent<Props> = (props) => {
  const { character: character, onSave, onChange } = props;
  const newCharacter: Character = {
    id: character.id,
    gender: character.gender,
    name: '',
    country: '',
    comment: ''
  }

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" onChange={onChange}/>
          <TextFieldComponent name="country" label="Country" onChange={onChange}/>
          <TextFieldComponent
            name="comment"
            label="Comment"
            multiline={true}
            rows={3}
            rowsMax={5}
            onChange={onChange}
          />
          <Button type="submit" variant="contained" color="primary" onClick={() => onSave({...character})}>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
