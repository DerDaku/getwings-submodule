import { SET_COOKIE } from './types'

const reduxSetCookie = payload => ({
  type: SET_COOKIE,
  payload,
})

export { reduxSetCookie }
