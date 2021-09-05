import produce from 'immer';

const INITIAL_STATE = {
  detailsContact: {},
};

export default function detailsContact(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@contact/CLEAR_CONTACT_DETAILS':
      return produce(state, draft => {
        draft.detailsContact = {};
      });
    case '@contact/SET_CONTACT_DETAILS_REQUEST': {
      return produce(state, draft => {
        draft.profile = action.payload.data;
      });
    }
    case '@contact/SET_CONTACT_DETAILS': {
      return produce(state, draft => {
        draft.detailsContact = action.payload.data;
      });
    }
    case '@contact/UPDATE_AVATAR_CONTACT_DETAILS_REQUEST': {
      return produce(state, draft => {
        draft.detailsContact.avatar = action.payload.data;
      });
    }
    default:
      return state;
  }
}
