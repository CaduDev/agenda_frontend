import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper, Component } from './styles';

import Header from '../../../Components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Component>
        {children}
      </Component>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
