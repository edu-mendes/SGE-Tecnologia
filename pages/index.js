/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Menu from '../src/components/commons/Menu';

export default function Home() {
  return (
    <div>
      <Menu />
      <Container component="article" maxWidth="sm" style={{ padding: '10vh' }}>
        <Typography variant="h3" component="h1" align="center">SGE Tecnologia</Typography>
      </Container>
    </div>
  );
}
