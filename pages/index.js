/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return <Title>SGE Tecnologia</Title>;
}
