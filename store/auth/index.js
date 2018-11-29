import { SIGN_IN, SIGN_OUT } from './types'

const initialState = {
  auth: '',
  valid: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        ...action.payload.data.data,
        valid: true,
      }
    case SIGN_OUT:
      return { valid: false }
    default:
      return state
  }
}
