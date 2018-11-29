import { SET_COOKIE } from './types'

const initialState = {
  valid: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COOKIE:
      return {
        ...state,
        ...action.payload,
        valid: true,
      }
    default:
      return state
  }
}
