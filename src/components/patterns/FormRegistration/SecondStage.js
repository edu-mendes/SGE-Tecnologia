/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TextField from '../../form/TextField';

function SecondStage({ aoEnviar }) {
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [birthDate, setBirthDate] = React.useState('');

  return (
    <form onSubmit={(ev) => {
      ev.preventDefault();
      aoEnviar({ name, lastName, birthDate });
    }}
    >
      <p>Nome:</p>
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
      <p>Sobrenome:</p>
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
      <p>Data de Nascimento:</p>
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
      <button type="submit">
        Proximo
      </button>
    </form>
  );
}

export default SecondStage;
