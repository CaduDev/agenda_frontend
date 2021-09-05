/* eslint-disable no-plusplus */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import { useDispatch } from 'react-redux';

import { Container, Card } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

function SigIn() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handlerSigIn() {
    // toast.success('alert', { className: 'alert_success' });
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Card>
        <span>Agenda</span>
        <Form onSubmit={handlerSigIn}>
          <Input
            type="text"
            name="email"
            placeholder="Digitar seu e-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Digitar sua senha"
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Acessar</button>

          <Link to="/register">cadastrar</Link>
        </Form>
      </Card>
    </Container>
  );
}

export default SigIn;
