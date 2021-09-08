/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Menu from '../src/components/commons/Menu';
import FormRegistration from '../src/components/patterns/FormRegistration';
import { initialState, storeReducer } from '../src/reducers/store';
import FormContext from '../src/context/formContext';

export default function Formulario() {
  const [state, dispatch] = React.useReducer(storeReducer, initialState);

  return (
    <FormContext.Provider value={{ forms: state.forms, dispatch }}>
      <div>
        <Menu />
        <Container component="article" maxWidth="sm" style={{ padding: '10vh' }}>
          <Typography variant="h5" component="h3" align="center">Formulário</Typography>
          <FormRegistration aoEnviar={aoEnviarForm} />
        </Container>
      </div>
    </FormContext.Provider>
  );
}

function aoEnviarForm(dados) {
  // eslint-disable-next-line no-console
  console.log(dados);
  // recebe conteudo inserido no formulario em objeto
}
