/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import {
  FaPlus,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaTrash,
} from 'react-icons/fa';

import { Form, Input, Select } from '@rocketseat/unform';

import { toast } from 'react-toastify';

import {
  Container,
  Content,
  Card,
  Body,
  Items,
  ButtonAddItems,
} from './styles';

import AvatarContact from '../../Components/AvatarContact';
import InputTypeSelected from '../../Components/InputTypeSelected';

// eslint-disable-next-line import/named
import {
  setUpdateAvatarRequest,
  setContactDetailsRequest,
} from '../../store/modules/detailsContact/actions';

import api from '../../services/api';

function Contact() {
  const dispatch = useDispatch();
  const detailsContact = useSelector(
    state => state.detailsContact.detailsContact
  );
  const profile = useSelector(state => state.profile.profile);
  const [data, setData] = useState({
    user_id: profile.id,
    phone_type: 1,
    name: '',
    surname: '',
    gender: '',
    phone: '',
    created_by: profile.id,
    avatar: '',
    id: null,
  });
  const schema = yup.object().shape({
    name: yup.string().required('Nome obrigatório!'),
    gender: yup.string().required('Selecione um valor!'),
    // email: yup
    //   .string()
    //   .email('Digite um e-mail válido!')
    //   .required('E-mail obrigatório!'),
    // phone: yup
    //   .string()
    //   .min(9, 'A senha precisa ser maior que 6 digitos!')
    //   .required('E-mail obrigatório!'),
  });
  const [canRegister, setCanRegister] = useState(false);
  const [canRegisterItems, setCanRegisterItems] = useState(false);
  const [createItems, setCreateItems] = useState(false);
  const [dataItems, setDataItems] = useState({
    contact_type: null,
    value: '',
    contact_id: detailsContact && detailsContact.id ? detailsContact.id : null,
    created_at: new Date(),
    created_by: profile.id,
  });
  const [validValue, setValidValue] = useState('');

  function handlerCreateContact() {}

  async function setImageContact(value) {
    if (detailsContact && detailsContact.id) {
      dispatch(
        setUpdateAvatarRequest({
          file_type: 1,
          id_contact: detailsContact.id,
          user_id: data.user_id,
          name: 'teste.jpg',
          base64: value,
        })
      );
    } else {
      console.log(value);
      setData({
        ...data,
        avatar: value,
      });
    }
  }

  useEffect(() => {
    setData({
      ...detailsContact,
      user_id: profile.id,
    });
  }, [detailsContact, profile.id]);

  useEffect(() => {
    setCanRegister(data.name && data.surname);
  }, [data]);

  useEffect(() => {
    setCanRegisterItems(
      dataItems.contact_type && dataItems.value && validValue === ''
    );
  }, [dataItems, validValue]);

  async function handlerSubmitUpdateorCreate() {
    try {
      if (detailsContact && detailsContact.id) {
        const { data: response } = await api.put('contact', data);
      } else {
        const { data: response } = await api.post('contact', data);

        const { id } = response;

        dispatch(setContactDetailsRequest({ id, type: 'edit' }));
      }

      toast.error(
        `Contato ${
          detailsContact && detailsContact.id ? 'Atualizado' : 'Cadastrado'
        } com sucesso!`,
        {
          className: 'alert_success',
        }
      );
    } catch (err) {
      toast.error(
        `Erro ao  ${
          detailsContact && detailsContact.id ? 'Atualizar' : 'Cadastrar'
        } contato!`,
        {
          className: 'alert_error',
        }
      );
    }
  }

  async function handlerSubmitUpdateorCreateItems() {
    try {
      if (detailsContact && detailsContact.id) {
        await api.post('items', [
          {
            ...dataItems,
            contact_id:
              detailsContact && detailsContact.id ? detailsContact.id : null,
          },
        ]);

        dispatch(
          setContactDetailsRequest({ id: detailsContact.id, type: 'edit' })
        );
        setCreateItems(false);
      } else {
        // const { data: response } = await api.post('items', data);
        // const { id } = response;
        // dispatch(setContactDetailsRequest({ id, type: 'edite' }));
      }

      toast.error(
        `Contato ${
          detailsContact && detailsContact.id ? 'Atualizado' : 'Cadastrado'
        } com sucesso!`,
        {
          className: 'alert_success',
        }
      );
    } catch (err) {
      toast.error(
        `Erro ao  ${
          detailsContact && detailsContact.id ? 'Atualizar' : 'Cadastrar'
        } contato!`,
        {
          className: 'alert_error',
        }
      );
    }
  }

  async function deleteItem(id) {
    try {
      await api.post('items/delete', {
        id,
        user_id: profile.id,
      });

      dispatch(
        setContactDetailsRequest({ id: detailsContact.id, type: 'edit' })
      );
    } catch (err) {
      toast.error(`Ocorreu um erro ao tentar apagar contato!`, {
        className: 'alert_error',
      });
    }
  }

  return (
    <Container>
      {console.log(detailsContact)}
      <Content>
        <Card readOnly={detailsContact.type === 'view'}>
          <div className="header">
            <div className="content_title_modal">
              <span>
                {`${
                  detailsContact.type === 'edit'
                    ? 'Atualizar'
                    : detailsContact.type === 'view'
                    ? 'Detalhes'
                    : 'Criar'
                } Contato`}
              </span>
            </div>
          </div>
          <Body>
            <div className="primary">
              <AvatarContact
                edit={detailsContact && detailsContact.type !== 'view'}
                url={
                  detailsContact && detailsContact.avatar
                    ? detailsContact.avatar.url
                    : null
                }
                setImageContact={setImageContact}
              />
              <Form
                onSubmit={handlerCreateContact}
                initialData={data}
                schema={schema}
              >
                <Input
                  type="text"
                  name="name"
                  readOnly={detailsContact && detailsContact.type === 'view'}
                  value={data.name}
                  placeholder="Digitar seu nome"
                  onChange={e => {
                    setData({
                      ...data,
                      name: e.target.value,
                    });
                  }}
                />
                <Input
                  type="text"
                  name="surname"
                  readOnly={detailsContact && detailsContact.type === 'view'}
                  placeholder="Digitar seu sobrenome"
                  value={data.surname}
                  onChange={e => {
                    setData({
                      ...data,
                      surname: e.target.value,
                    });
                  }}
                />
                {/* <InputPhone
                  name="phone"
                  international={international}
                  setInternational={setInternational}
                  setData={setData}
                  data={data}
                  setValidPhone={setValidPhone}
                  validPhone={validPhone}
                /> */}
                {detailsContact && detailsContact.type !== 'view' && (
                  <button
                    disabled={!canRegister}
                    type="submit"
                    onClick={() => handlerSubmitUpdateorCreate()}
                  >{`${
                    detailsContact && detailsContact.id
                      ? 'Atualizar'
                      : 'Cadastrar'
                  }`}</button>
                )}
              </Form>
            </div>
            <div />
          </Body>
          <Items>
            {detailsContact && detailsContact.id && (
              <div className="contentItems">
                <div className="header-contentItems">
                  <h3>Lista de contatos</h3>
                  {detailsContact && detailsContact.type !== 'view' && (
                    <ButtonAddItems
                      type="button"
                      onClick={() => setCreateItems(true)}
                    >
                      <FaPlus />
                    </ButtonAddItems>
                  )}
                </div>
                {createItems && (
                  <>
                    <div
                      className="cover"
                      onClick={() => setCreateItems(false)}
                    />
                    <Form
                      onSubmit={handlerCreateContact}
                      initialData={data}
                      schema={schema}
                    >
                      <Select
                        options={[
                          {
                            id: 1,
                            title: 'E-mail',
                          },
                          {
                            id: 2,
                            title: 'Whatsapp',
                          },
                          {
                            id: 3,
                            title: 'Fixo',
                          },
                        ]}
                        onChange={res => {
                          setDataItems({
                            ...dataItems,
                            contact_type: parseInt(res.target.value),
                          });
                        }}
                        name="contact_type"
                        placeholder="Tipo de contato"
                        autoComplete="off"
                      />
                      <InputTypeSelected
                        setValue={res => {
                          setDataItems({
                            ...dataItems,
                            value: res,
                          });
                        }}
                        value={dataItems.value}
                        type={dataItems.contact_type}
                        setValidValue={setValidValue}
                        validValue={validValue}
                      />

                      {detailsContact && detailsContact.type !== 'view' && (
                        <button
                          disabled={!canRegisterItems}
                          type="submit"
                          onClick={() => handlerSubmitUpdateorCreateItems()}
                        >{`${
                          detailsContact && detailsContact.id
                            ? 'Atualizar'
                            : 'Cadastrar'
                        }`}</button>
                      )}
                    </Form>
                  </>
                )}

                {detailsContact && detailsContact.contact_list.length > 0 ? (
                  <div className="body-contentItems">
                    {detailsContact &&
                      detailsContact.contact_list &&
                      detailsContact.contact_list.map(res => {
                        return (
                          <div>
                            <div>
                              <span className="icon">
                                {res.contact_type == 1 && (
                                  <FaEnvelope color="#ffad46" />
                                )}
                                {res.contact_type == 2 && (
                                  <FaWhatsapp color="#b5f3b5" />
                                )}
                                {res.contact_type == 3 && (
                                  <FaPhone color="#93abef" />
                                )}
                              </span>
                              <span className="value">{res.value}</span>
                            </div>
                            {detailsContact && detailsContact.type !== 'view' && (
                              <button
                                className="delete_row"
                                onClick={() => deleteItem(res.id)}
                              >
                                <FaTrash color="#c56f6f" />
                              </button>
                            )}
                          </div>
                        );
                      })}
                  </div>
                ) : (
                  <div className="not_contact_registred">
                    <h3>Nenhum contato cadastrado!</h3>
                  </div>
                )}
              </div>
            )}
          </Items>
        </Card>
      </Content>
    </Container>
  );
}

export default Contact;
