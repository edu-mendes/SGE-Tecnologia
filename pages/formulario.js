/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Menu from '../src/components/commons/Menu';
import FormRegistration from '../src/components/patterns/FormRegistration';

export default function Formulario() {
  return (
    <div>
      <Menu />
      <Container component="article" maxWidth="sm" style={{ padding: '10vh' }}>
        <Typography variant="h5" component="h3" align="center">Formulário</Typography>
        <FormRegistration aoEnviar={aoEnviarForm} />
      </Container>
    </div>
  );
}

function aoEnviarForm(dados) {
  // eslint-disable-next-line no-console
  console.log(dados);
  // recebe conteudo inserido no formulario em objeto
}
