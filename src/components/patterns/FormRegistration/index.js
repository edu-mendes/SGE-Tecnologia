/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Step, StepLabel, Stepper, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import FirstStage from './FirstStage';
import SecondStage from './SecondStage';
import ThirdStage from './ThirdStage';

function FormRegistration({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = React.useState(0);
  const [dadosColetados, setDados] = React.useState({});

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function voltar() {
    setEtapaAtual(etapaAtual - 1);
  }

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  const formularios = [
    <FirstStage aoEnviar={coletarDados} />,
    <SecondStage aoEnviar={coletarDados} voltar={voltar} />,
    <ThirdStage aoEnviar={coletarDados} voltar={voltar} />,
    <Typography variant="h5" component="h1" align="center">Obrigado pelo Cadastro!</Typography>,
  ];

  React.useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Dados Pessoais</StepLabel></Step>
        <Step><StepLabel>Endereço</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

FormRegistration.propTypes = {
  aoEnviar: PropTypes.string.isRequired,
};

export default FormRegistration;
