/* eslint-disable react/jsx-filename-extension */
import React from 'react';
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
      <p>E-mail:</p>
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
      <p>Senha:</p>
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
      <p>Confirmar Senha:</p>
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
      <button type="submit">
        Proximo
      </button>
    </form>
  );
}

export default FirstStage;
