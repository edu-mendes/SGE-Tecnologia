/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import TextField from '../../form/TextField';
import FormContext from '../../../context/formContext';

function SecondStage({ aoEnviar, handleBack }) {
  const formContext = React.useContext(FormContext);
  const [name, setName] = React.useState(formContext.forms.name);
  const [lastName, setLastName] = React.useState(formContext.forms.lastName);
  const [birthDate, setBirthDate] = React.useState(formContext.forms.birthDate);

  const handleApplyForm = () => {
    const newForms = { name, lastName, birthDate };
    formContext.dispatch({ type: 'SET_FORMS', forms: newForms });
  };

  return (
    <form onSubmit={(ev) => {
      ev.preventDefault();
      aoEnviar({ name, lastName, birthDate });
    }}
    >
      <Typography>Nome:</Typography>
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        name="name"
        id="name"
        placeholder="Nome"
        type="name"
        required
      />
      <Typography>Sobrenome:</Typography>
      <TextField
        value={lastName}
        onChange={(ev) => {
          setLastName(ev.target.value);
        }}
        name="lastName"
        id="lastName"
        placeholder="Nome Completo"
        type="name"
        required
      />
      <Typography>Data de Nascimento:</Typography>
      <TextField
        value={birthDate}
        onChange={(ev) => {
          setBirthDate(ev.target.value);
        }}
        name="birthDate"
        id="birthDate"
        placeholder="Data de Nascimento"
        type="date"
        required
      />
      <Button variant="contained" color="primary" fullWidth style={{ marginBlock: '1vh' }} onClick={handleBack}>
        Voltar
      </Button>
      <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleApplyForm}>
        Proxímo
      </Button>
    </form>
  );
}

SecondStage.propTypes = {
  aoEnviar: PropTypes.string.isRequired,
  handleBack: PropTypes.string.isRequired,
};

export default SecondStage;
