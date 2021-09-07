/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import TextField from '../../form/TextField';

function ThirdStage({ aoEnviar, voltar }) {
  const [cep, setCep] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({
          cep, address, number, state, city,
        });
      }}
    >
      <p>CEP</p>
      <TextField
        value={cep}
        onChange={(ev) => {
          setCep(ev.target.value);
        }}
        id="cep"
        placeholder="CEP"
        type="number"
      />
      <p>Endereço:</p>
      <TextField
        value={address}
        onChange={(ev) => {
          setAddress(ev.target.value);
        }}
        id="address"
        placeholder="Endereço"
        type="text"
      />
      <p>Número:</p>
      <TextField
        value={number}
        onChange={(ev) => {
          setNumber(ev.target.value);
        }}
        id="number"
        placeholder="Número"
        type="number"
      />
      <p>Estado:</p>
      <TextField
        value={state}
        onChange={(ev) => {
          setState(ev.target.value);
        }}
        id="state"
        placeholder="Estado"
        type="text"
      />
      <p>Cidade:</p>
      <TextField
        value={city}
        onChange={(ev) => {
          setCity(ev.target.value);
        }}
        id="city"
        label="Cidade"
        type="text"
        placeholder="Cidade"
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

ThirdStage.propTypes = {
  aoEnviar: PropTypes.string.isRequired,
  voltar: PropTypes.string.isRequired,
};

export default ThirdStage;
