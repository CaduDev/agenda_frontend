import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './routes';

import SigIn from '../pages/SigIn';

import Contacts from '../pages/Contacts';

import Contact from '../pages/Contact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      <Route path="/contacts" isPrivate component={Contacts} />
      <Route path="/contact" isPrivate component={Contact} />
    </Switch>
  );
}
