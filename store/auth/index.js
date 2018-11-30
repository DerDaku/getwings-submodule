import { AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_MODAL_OPEN } from './types'

const initialState = {
  auth: '',
  valid: false,
  modal: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGN_IN:
      return {
        ...state,
        ...action.payload.data.data,
        valid: true,
      }
    case AUTH_SIGN_OUT:
      return { valid: false }
    case AUTH_MODAL_OPEN:
      return {
        ...state,
        modal: action.payload,
      }
    default:
      return state
  }
}
