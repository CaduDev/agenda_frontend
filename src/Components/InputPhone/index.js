/* eslint-disable react/prop-types */
/* eslint-disable eqeqeq */
import React from 'react';
import InputMask from 'react-input-mask';

// import { Container } from './styles';

const InputPhone = ({
  international,
  data,
  setData,
  setInternational,
  setValidPhone,
  validPhone,
}) => {
  if (international) {
    return (
      <>
        <InputMask
          mask="+9(999) 999–9999"
          name="phone"
          placeholder="+9(999) 999–9999"
          value={data.phone}
          onChange={value => {
            if (value.target.value.replace(/[^\d]+/g, '')[0] == 1) {
              setInternational(true);
            } else {
              setInternational(false);
            }

            setValidPhone(
              !(value.target.value.replace(/[^\d]+/g, '').length < 10)
            );

            setData({
              ...data,
              phone: value.target.value.replace(/[^\d]+/g, ''),
            });
          }}
        />
        {!validPhone && <span>Telefone Inválido</span>}
      </>
    );
  }

  return (
    <>
      <InputMask
        mask="+99 (99) 99999-9999"
        placeholder="+99 (99) 99999-9999"
        value={data.phone}
        name="phone"
        onChange={value => {
          if (value.target.value.replace(/[^\d]+/g, '')[0] == 1) {
            setInternational(true);
          } else {
            setInternational(false);
          }

          setValidPhone(
            !(value.target.value.replace(/[^\d]+/g, '').length < 12)
          );

          setData({
            ...data,
            phone: value.target.value.replace(/[^\d]+/g, ''),
          });
        }}
      />
      {!validPhone && <span>Telefone Inválido</span>}
    </>
  );
};

export default InputPhone;
