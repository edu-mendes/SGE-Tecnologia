/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #000;
  padding: 12px 16px;
  outline: 0;
  border-radius: 10px;
`;

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  type,
  required,
}) {
  return (
    <InputWrapper>
      <Input
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        required={required}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.string.isRequired,
};
