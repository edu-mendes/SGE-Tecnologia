/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import TextField from '../../form/TextField';

function SecondStage({ aoEnviar, voltar }) {
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [birthDate, setBirthDate] = React.useState('');

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
      <Button variant="contained" color="primary" fullWidth style={{ marginBlock: '1vh' }} onClick={voltar}>
        Voltar
      </Button>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Proxímo
      </Button>
    </form>
  );
}

SecondStage.propTypes = {
  aoEnviar: PropTypes.string.isRequired,
  voltar: PropTypes.string.isRequired,
};

export default SecondStage;
