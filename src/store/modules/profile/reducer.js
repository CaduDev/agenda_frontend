import produce from 'immer';

const INITIAL_STATE = {
  profile: {},
};

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    case '@auth/USER_LOGOUT': {
      return produce(state, draft => {
        draft.profile = {};
      });
    }
    case '@user/UPDATE_PROFILE_SUCCESS': {
      return produce(state, draft => {
        draft.profile = action.payload.profile;
      });
    }
    default:
      return state;
  }
}
