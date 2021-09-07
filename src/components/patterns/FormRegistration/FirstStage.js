/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '@material-ui/core';
import TextField from '../../form/TextField';

function FirstStage({ aoEnviar }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <form onSubmit={(ev) => {
      ev.preventDefault();
      aoEnviar({ email, password, confirmPassword });
    }}
    >
      <Typography>E-mail:</Typography>
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        name="email"
        id="email"
        placeholder="Email"
        type="email"
        required
      />
      <Typography>Senha:</Typography>
      <TextField
        value={password}
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
        name="password"
        id="password"
        placeholder="Senha"
        type="password"
        required
      />
      <Typography>Confirmar Senha:</Typography>
      <TextField
        value={confirmPassword}
        onChange={(ev) => {
          setConfirmPassword(ev.target.value);
        }}
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirmar Senha"
        type="password"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Proxímo
      </Button>
    </form>
  );
}

FirstStage.propTypes = {
  aoEnviar: PropTypes.string.isRequired,
};

export default FirstStage;
