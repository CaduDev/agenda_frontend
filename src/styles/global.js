/* eslint-disable import/no-extraneous-dependencies */
import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';

import 'react-toastify/dist/ReactToastify.css';

import 'owl.carousel/dist/assets/owl.carousel.css';

import 'owl.carousel/dist/assets/owl.theme.default.css';

import 'react-datepicker/dist/react-datepicker.css';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

import 'emoji-mart/css/emoji-mart.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import 'react-confirm-alert/src/react-confirm-alert.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    padding: 0;
    margin: 0;
    outline: none !important;
    box-sizing: border-box !important;
    outline-color: transparent !important;
  }
  html, body, #root {
    height: 100%;
    overflow-x: hidden;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  ul, li {
    list-style:none;
  }
  button {
    cursor:pointer;
  }
  a {
    text-decoration: none;
  }
  input, select { 
    color: rgb(120, 103, 157);
  }
  .alert_error {
    background: #a03f06d9 !important;
    border-radius: 4px !important;
  }
  .alert_success {
    background-color: #387567d6 !important;
    border-radius: 4px !important;
  }

  input:read-only {
    border-style: dashed !important;
    background: transparent !important;
    cursor: not-allowed !important;
  }

  .react-confirm-alert-overlay {
  background:rgba(0,0,0,.5) !important;

  h1 {
    font-size: 20px;
    margin-bottom:5px;
  }

  .react-confirm-alert-button-group {
    button {
      border-radius:4px;
      background: transparent;
      border: 1px solid #222;
      color: #222;
      transition:all .2s;

      &:first-child:hover {
        background:#339e2b;
        border: 1px solid transparent;
        color:#FFF;
      }
      &:last-child:hover {
        background:#9e2b2b;
        border: 1px solid transparent;
        color:#FFF;
      }
    }
  }
}
`;
