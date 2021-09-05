export function setContactDetailsRequest(data) {
  return {
    type: '@contact/SET_CONTACT_DETAILS_REQUEST',
    payload: { data },
  };
}

export function setContactDetailsSuccess(data) {
  return {
    type: '@contact/SET_CONTACT_DETAILS',
    payload: { data },
  };
}

export function clearContactDetails() {
  return {
    type: '@contact/CLEAR_CONTACT_DETAILS',
  };
}

export function setUpdateAvatarRequest(data) {
  return {
    type: '@contact/UPDATE_AVATAR_CONTACT_DETAILS_REQUEST',
    payload: { data },
  };
}

export function setUpdateAvatar(data) {
  return {
    type: '@contact/UPDATE_AVATAR_CONTACT_DETAILS',
    payload: { data },
  };
}
