/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import TextField from '../../form/TextField';
import FormContext from '../../../context/formContext';

function ThirdStage({ aoEnviar, handleBack }) {
  const formContext = React.useContext(FormContext);
  const [cep, setCep] = React.useState(formContext.forms.cep);
  const [address, setAddress] = React.useState(formContext.forms.address);
  const [number, setNumber] = React.useState(formContext.forms.number);
  const [state, setState] = React.useState(formContext.forms.state);
  const [city, setCity] = React.useState(formContext.forms.city);

  const handleApplyForm = () => {
    const newForms = {
      cep, address, number, state, city,
    };
    formContext.dispatch({ type: 'SET_FORMS', forms: newForms });
  };

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
      <Button variant="contained" color="primary" fullWidth style={{ marginBlock: '1vh' }} onClick={handleBack}>
        Voltar
      </Button>
      <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleApplyForm}>
        Enviar
      </Button>
    </form>
  );
}

ThirdStage.propTypes = {
  aoEnviar: PropTypes.string.isRequired,
  handleBack: PropTypes.string.isRequired,
};

export default ThirdStage;
