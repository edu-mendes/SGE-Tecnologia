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
  const [currentStage, setCurrentStage] = React.useState(0);
  const [infoData, setInfoData] = React.useState({});

  function nextStage() {
    setCurrentStage(currentStage + 1);
  }

  function handleBack() {
    setCurrentStage(currentStage - 1);
  }

  function dataPages(dados) {
    setInfoData({ ...infoData, ...dados });
    nextStage();
  }

  const pages = [
    <FirstStage aoEnviar={dataPages} />,
    <SecondStage aoEnviar={dataPages} handleBack={handleBack} />,
    <ThirdStage aoEnviar={dataPages} handleBack={handleBack} />,
    <Typography variant="h5" component="h1" align="center">Obrigado pelo Cadastro!</Typography>,
  ];

  React.useEffect(() => {
    if (currentStage === pages.length - 1) {
      aoEnviar(infoData);
    }
  });

  return (
    <>
      <Stepper activeStep={currentStage}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Dados Pessoais</StepLabel></Step>
        <Step><StepLabel>Endereço</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {pages[currentStage]}
    </>
  );
}

FormRegistration.propTypes = {
  aoEnviar: PropTypes.string.isRequired,
};

export default FormRegistration;
