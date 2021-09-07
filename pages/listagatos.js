/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import ListCats from '../src/components/commons/ListCats';
import Menu from '../src/components/commons/Menu';

export default function ListaGatos() {
  return (
    <div>
      <Menu />
      <Container component="article" maxWidth="sm" style={{ padding: '10vh' }}>
        <Typography variant="h5" component="h3" align="center">Lista de Gatos</Typography>
        <ListCats />
      </Container>
    </div>
  );
}
