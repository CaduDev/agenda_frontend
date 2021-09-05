import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUser, FaCircle, FaEnvelope, FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';
import CardContacts from '../../Components/CardContacts';
import Avatar from '../../Components/Avatar';

import { setContactDetailsRequest } from '../../store/modules/detailsContact/actions';
import { handlerExclude } from '~/scripts/index'

import {
  Container,
  CardProfile,
  ScrollContainer,
  Scroll,
  ContainerSearch,
} from './styles';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profile);
  const detailsContact = useSelector(
    state => state.detailsContact.detailsContact
  );
  const [height, setHeight] = useState(0);
  const [contactList, setContactList] = useState([]);
  const clear = null;

  useEffect(() => {
    setHeight(window.innerHeight - 165);

    async function getContactList() {
      const { data: response } = await api.get('contact/1');
      setContactList(response);
    }

    getContactList();
  }, []);

  useEffect(() => {
    console.log(detailsContact);
    if (detailsContact && detailsContact.id) {
      history.push('/contact');
    }
  }, [detailsContact]);

  function handlerDetails(id, type) {
    dispatch(setContactDetailsRequest({ id, type }));
  }

  async function deleteContact(id) {
    handlerExclude('contact/delete', id, profile.id, 'contato', setContactList)
  }

  async function handlerSearch(value) {
    const { data } = await api.get(
      `contact/search?user_id=${profile.id}&name=${value}`
    );

    setContactList(data);
  }

  return (
    <ScrollContainer>
      <Container>
        <CardProfile>
          <div>
            <Avatar edit />
          </div>
          <div className="info-user">
            <span>
              <FaUser color="#8a8a8a" size={16} /> {profile.fullname}
            </span>
            <span>
              <FaCircle color="#8a8a8a" size={16} /> {profile.genre}
            </span>
            <span>
              <FaEnvelope color="#8a8a8a" size={16} /> {profile.email}
            </span>
          </div>
          <div className="containerButtonCreateContact">
            <Link to="/contact">Novo Contato</Link>
          </div>
        </CardProfile>
        <div className="list-contacts" style={{ height }}>
          <ContainerSearch>
            <FaSearch color="#8a8a8a" size={16} />
            <input
              placeholder="pesquisar contato..."
              onChange={value => handlerSearch(value.target.value)}
            />
          </ContainerSearch>
          {contactList && contactList.length > 0 ? (
            <Scroll
              style={{
                height: 'calc(100% - 60px)',
              }}
            >
              <div className="center">
                {contactList.map(res => {
                  return (
                    <CardContacts
                      data={res}
                      handlerDetails={handlerDetails}
                      deleteContact={deleteContact}
                    />
                  );
                })}
              </div>
            </Scroll>
          ) : (
            <div className="not_contact_registred">
              <h2>Nenhum contato cadastrado!</h2>
            </div>
          )}
        </div>
      </Container>
    </ScrollContainer>
  );
}

export default Profile;
