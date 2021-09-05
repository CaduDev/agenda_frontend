import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const {
      id,
      name,
      surname,
      email,
      birthday,
      user_type,
      ...rest
    } = payload.data;

    const profile = {
      id,
      user_type,
      name,
      surname,
      birthday,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    try {
      const response = yield call(api.put, 'user', profile);

      toast.success('Perfil atualizado com sucesso!', {
        className: 'alert_success',
      });

      const { user } = response.data;

      yield put(updateProfileSuccess(user));
    } catch (err) {
      toast.error('Erro ao atualizar perfil, confira seus dados!', {
        className: 'alert_error',
      });

      yield put(updateProfileFailure());
    }
  } catch (err) {
    toast.error(err, { className: 'alert_error' });
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
