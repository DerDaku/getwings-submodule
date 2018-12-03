import axios from 'axios'
import Cookie from 'js-cookie'
import { authSignIn } from '../store/auth/actions'
import { reduxSetCookie } from '../store/cookie/actions'
import {
  setDataThemes,
  setDataAllWings,
  setDataCategories,
  setDataCurrentCategory,
  setDataCurrentCategoryThemes,
} from '../store/data/actions'
import store from '../store'
import { keys } from '../assets'

const { domain } = keys
const method = 'get'

const setCookie = async () => {
  const RESULT = null

  await axios({
    method,
    url: `${domain}/auth/validate_token`,
    mode: 'cors',
    headers: {
      Client: Cookie.set('client'),
      'Access-token': Cookie.set('access-token'),
      Uid: Cookie.set('uid'),
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then(res => {
      Cookie.set('client', res.headers.client, { expires: 7 })
      Cookie.set('uid', res.headers.uid, { expires: 7 })
      Cookie.set('access-token', res.headers['access-token'], { expires: 7 })
      store.dispatch(reduxSetCookie(res))
      store.dispatch(authSignIn(res))
    })
    .catch(() => {})

  return RESULT
}

// Get all themes
const getAllThemes = async () => {
  const ALL_THEMES = []
  let RETURN = null
  await axios({
    method,
    url: `${domain}/themes`,
  })
    .then(res => {
      const { data: themes } = res
      ALL_THEMES.push(themes)
      RETURN = res.data
      store.dispatch(setDataThemes(...ALL_THEMES))
    })
    .catch(error => {
      throw error
    })
  return RETURN
}

// Get all themes by category
const getAllThemesByCategory = async id => {
  let RETURN = null

  await axios({
    method,
    url: `${domain}/categories/${id}/themes`,
  })
    .then(res => {
      RETURN = res.data
      store.dispatch(setDataCurrentCategoryThemes(res.data))
    })
    .catch(error => {
      throw error
    })
  return RETURN
}

const getAllMeditationsByTheme = async id => {
  let RESPONSE = []

  await axios({
    method,
    url: `${domain}/themes/${id}/meditations`,
  })
    .then(res => {
      RESPONSE = res.data

      return true
    })
    .catch(error => {
      throw error
    })
  return RESPONSE
}

// Get all categories
const getAllCategories = async () => {
  const RESPONSE = []

  await axios({
    method,
    url: `${domain}/categories`,
  })
    .then(res => store.dispatch(setDataCategories(res.data)))
    .catch(error => {
      throw error
    })
  return RESPONSE
}

// Get category by ID
const getCategoryById = async id => {
  const RESPONSE = []

  await axios({
    method,
    url: `${domain}/categories/${id}`,
  })
    .then(res => store.dispatch(setDataCurrentCategory(res.data)))
    .catch(error => {
      throw error
    })
  return RESPONSE
}

// Get meditation by ID
const getMeditationsById = async id => {
  const RESPONSE = []
  await axios({
    method,
    url: `${domain}/categories/${id}/themes`,
  }).catch(error => {
    throw error
  })
  return RESPONSE
}

// Get all meditations by category
const getAllMeditationsByCategory = async id => {
  const RESPONSE = []
  await axios({
    method,
    url: `${domain}/categories/${id}/meditations`,
  }).catch(error => {
    throw error
  })
  return RESPONSE
}

// Get meditation by ID
const getMeditationById = async id => {
  let RESPONSE = []
  await axios({
    method,
    url: `${domain}/meditations/${id}`,
  })
    .then(res => {
      RESPONSE = res
      return res
    })
    .catch(error => {
      throw error
    })
  return RESPONSE
}

// Get all meditations
const getAllMeditations = async () => {
  let RESPONSE = []
  await axios({
    method,
    url: `${domain}/meditations`,
  })
    .then(res => {
      RESPONSE = res
    })
    .catch(error => {
      throw error
    })
  return RESPONSE
}

// Get all meditations by wing
const getAllMeditationsByWing = async id => {
  let RESPONSE = []
  await axios({
    method,
    url: `${domain}/wings/${id}/meditations`,
  })
    .then(res => {
      RESPONSE = res
    })
    .catch(error => {
      throw error
    })
  return RESPONSE
}

const getLogout = async () => {
  let RESPONSE = []
  axios({
    method: 'delete',
    url: `${domain}/auth/AUTH_SIGN_OUT`,
    headers: {
      Client: Cookie.set('client'),
      'Access-token': Cookie.set('access-token'),
      Uid: Cookie.set('uid'),
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then(() => {
      Cookie.remove('client')
      Cookie.remove('uid')
      Cookie.remove('access-token')
    })
    .then(res => {
      RESPONSE = res
    })
    .catch(() => {})
  return RESPONSE
}

// Get all wings
const getAllWings = async () => {
  let RESPONSE = []
  await axios({
    method,
    url: `${domain}/wings`,
  })
    .then(res => {
      RESPONSE = res
      store.dispatch(setDataAllWings(RESPONSE.data))
    })
    .catch(error => {
      throw error
    })
  return RESPONSE
}

// Get wing by ID
const getWingById = async id => {
  let RESPONSE = []
  await axios({
    method,
    url: `${domain}/wings/${id}`,
  })
    .then(res => {
      RESPONSE = res
    })
    .catch(error => {
      throw error
    })
  return RESPONSE
}

// Send reset password link
const getAuthResetPassword = async id => {
  let RESPONSE = []
  await axios({
    method: 'post',
    url: `${domain}/auth/password`,
  })
    .then(res => {
      RESPONSE = res
    })
    .catch(error => {
      throw error
    })
  return RESPONSE
}

export {
  getAllThemes,
  getAllThemesByCategory,
  setCookie,
  getAllMeditationsByTheme,
  getMeditationsById,
  getAllMeditationsByCategory,
  getAllMeditations,
  getMeditationById,
  getAllMeditationsByWing,
  getAllCategories,
  getLogout,
  getAllWings,
  getWingById,
  getAuthResetPassword,
  getCategoryById,
}
