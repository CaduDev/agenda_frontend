import { combineReducers } from 'redux';

import auth from './auth/reducer';
import profile from './profile/reducer';
import detailsContact from './detailsContact/reducer';

export default combineReducers({
  auth,
  profile,
  detailsContact,
});
