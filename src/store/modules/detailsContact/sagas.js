import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';

import { setContactDetailsSuccess, setUpdateAvatar } from './actions';

export function* setContactDetail({ payload }) {
  const { id, type } = payload.data;

  try {
    const response = yield call(api.get, `contact/details/${id}`);

    const { data } = response;
    yield put(setContactDetailsSuccess({ ...data, type }));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!', {
      className: 'alert_error',
    });
  }
}

export function* setAvatarDetauls({ payload }) {
  const { data } = payload;
  try {
    const response = yield call(api.post, '/avatar/contact', data);
    // eslint-disable-next-line no-console
    console.log(response);
    yield put(setUpdateAvatar(response.data));
    toast.success('foto do contato atualizada com sucesso!', {
      className: 'alert_success',
    });
  } catch (err) {
    toast.error('Erro ao atualizar foto do contato!', {
      className: 'alert_error',
    });
  }
}

export default all([
  takeLatest('@contact/SET_CONTACT_DETAILS_REQUEST', setContactDetail),
  takeLatest(
    '@contact/UPDATE_AVATAR_CONTACT_DETAILS_REQUEST',
    setAvatarDetauls
  ),
]);
