/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '@material-ui/core';
import TextField from '../../form/TextField';
import FormContext from '../../../context/formContext';

function FirstStage({ aoEnviar }) {
  const formContext = React.useContext(FormContext);
  const [email, setEmail] = React.useState(formContext.forms.email);
  const [newPassword, setNewPassword] = React.useState(formContext.forms.newPassword);
  const [confirmPassword, setConfirmPassword] = React.useState(formContext.forms.confirmPassword);

  const handleApplyForm = () => {
    const newForms = { email, newPassword, confirmPassword };
    formContext.dispatch({ type: 'SET_FORMS', forms: newForms });
  };

  return (
    <form onSubmit={(ev) => {
      ev.preventDefault();
      aoEnviar({ email, newPassword, confirmPassword });
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
        value={newPassword}
        onChange={(ev) => {
          setNewPassword(ev.target.value);
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
      <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleApplyForm}>
        Proxímo
      </Button>
    </form>
  );
}

FirstStage.propTypes = {
  aoEnviar: PropTypes.string.isRequired,
};

export default FirstStage;
