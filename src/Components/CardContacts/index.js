/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  FaPhone,
  FaCircle,
  FaEnvelope,
  FaPencilAlt,
  FaTrash,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { Container, ActionContainer } from './styles';

import { defaultAvatar } from '../../assets';

function CardContacts({ data, handlerDetails, deleteContact }) {
  return (
    <Container>
      <div>
        <img
          src={data.avatar ? data.avatar.url : defaultAvatar}
          alt="contact"
        />
      </div>
      <div className="info">
        <div className="title">
          <span onClick={() => handlerDetails(data.id, 'view')}>
            {data.name} {data.surname}
          </span>
          <ActionContainer>
            <button
              type="button"
              onClick={() => handlerDetails(data.id, 'edit')}
            >
              <FaPencilAlt color="#fff" size={14} />
            </button>
            <button type="button" onClick={() => deleteContact(data.id)}>
              <FaTrash color="#fff" size={14} />
            </button>
          </ActionContainer>
        </div>
        <div className="type">
          <div>
            <FaPhone color="#543898" size={16} />
            <div>Total de contatos: {data.contact_list.length}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CardContacts;
