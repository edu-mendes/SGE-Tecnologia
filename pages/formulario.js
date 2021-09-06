/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Menu from '../src/components/commons/Menu';
import FormRegistration from '../src/components/patterns/FormRegistration';

export default function Formulario() {
  return (
    <div>
      <Menu />
      <p>Formulário</p>
      <FormRegistration aoEnviar={aoEnviarForm} />
    </div>
  );
}

function aoEnviarForm(dados) {
  // eslint-disable-next-line no-console
  console.log(dados);
}
