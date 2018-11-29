import { SIGN_IN, SIGN_OUT } from './types'

const authSignIn = payload => ({
  type: SIGN_IN,
  payload,
})

const authSignOut = payload => ({
  type: SIGN_OUT,
  payload,
})

export { authSignIn, authSignOut }
