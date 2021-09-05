import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Input } from '@rocketseat/unform';

// import { Container } from './styles';

function InputTypeSelected({ type, value, setValue, validValue, setValidValue }) {
  useEffect(() => {
    setValidValue(true);
    setValue('');
  }, [type]);

  function validaEmail(email) {
    const usuario = email.substring(0, email.indexOf('@'));
    const dominio = email.substring(email.indexOf('@') + 1, email.length);

    if (
      usuario.length >= 1 &&
      dominio.length >= 3 &&
      usuario.search('@') == -1 &&
      dominio.search('@') == -1 &&
      usuario.search(' ') == -1 &&
      dominio.search(' ') == -1 &&
      dominio.search('.') != -1 &&
      dominio.indexOf('.') >= 1 &&
      dominio.lastIndexOf('.') < dominio.length - 1
    ) {
      setValidValue('');
    } else {
      setValidValue('E-mail inválido');
    }
  }

  if (type === null) {
    return <></>;
  }

  if (type == '1') {
    return (
      <>
        <Input
          placeholder="email@email.com"
          value={value}
          name="email"
          onChange={res => {
            validaEmail(res.target.value);
            setValue(res.target.value);
          }}
        />
        <span>{validValue && validValue}</span>
      </>
    );
  }

  if (type == '2') {
    return (
      <>
        <InputMask
          mask="+99 (99) 99999-9999"
          placeholder="+99 (99) 99999-9999"
          value={value}
          name="phone"
          onChange={res => {
            if (res.target.value.replace(/[^\d]+/g, '').length < 13) {
              setValidValue('Verifique se o telefone está correto!');
            } else if (res.target.value.replace(/[^\d]+/g, '')[4] !== '9') {
              setValidValue('Não esqueça do digito 9 apos o DDD!');
            } else {
              setValidValue('');
            }

            setValue(res.target.value);
          }}
        />
        <span>{validValue && validValue}</span>
      </>
    );
  }

  if (type == '3') {
    return (
      <>
        <InputMask
          mask="+99 (99) 9999-9999"
          placeholder="+99 (99) 9999-9999"
          value={value}
          name="phone"
          onChange={res => {
            if (res.target.value.replace(/[^\d]+/g, '').length < 12) {
              setValidValue('Verifique se o telefone está correto!');
            } else {
              setValidValue('');
            }

            setValue(res.target.value);
          }}
        />
        <span>{validValue && validValue}</span>
      </>
    );
  }

  return <div />;
}

export default InputTypeSelected;
