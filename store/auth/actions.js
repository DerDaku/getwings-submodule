import { AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_MODAL_OPEN } from './types'

const authSignIn = payload => ({
  type: AUTH_SIGN_IN,
  payload,
})

const authSignOut = payload => ({
  type: AUTH_SIGN_OUT,
  payload,
})

const authModalState = payload => ({
  type: AUTH_MODAL_OPEN,
  payload,
})

export { authSignIn, authSignOut, authModalState }
