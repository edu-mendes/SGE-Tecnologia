/* eslint-disable import/prefer-default-export */
export const initialState = {
  forms: {
    email: '',
    newPassword: '',
    confirmPassord: '',
    name: '',
    lastName: '',
    birthDate: '',
    cep: '',
    address: '',
    number: '',
    state: '',
    city: '',
  },
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FORMS':
      return {
        ...state,
        forms: action.forms,
      };
    default:
      return state;
  }
};
