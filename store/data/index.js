import {
  SET_DATA_CURRENT_THEME,
  SET_DATA_THEMES,
  SET_DATA_ALL_WINGS,
  SET_DATA_CURRENT_WING,
  SET_DATA_CATEGORIES,
  SET_DATA_CURRENT_CATEGORY,
  SET_DATA_CURRENT_CATEGORY_THEMES,
} from './types'

const initialState = {
  themes: {},
  currentTheme: {},
  currentThemeMeditations: {},
  wings: {},
  currentWing: {},
  categories: {},
  currentCategory: {},
  currentCategoryThemes: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_THEMES:
      return {
        ...state,
        themes: {
          ...action.payload,
        },
      }
    case SET_DATA_CURRENT_THEME:
      return {
        ...state,
        currentTheme: {
          ...action.payload,
        },
      }
    case SET_DATA_ALL_WINGS:
      return {
        ...state,
        wings: {
          ...action.payload,
        },
      }
    case SET_DATA_CURRENT_WING:
      return {
        ...state,
        currentWing: {
          ...action.payload,
        },
      }
    case SET_DATA_CATEGORIES:
      return {
        ...state,
        categories: {
          ...action.payload,
        },
      }
    case SET_DATA_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: {
          ...action.payload,
        },
      }
    case SET_DATA_CURRENT_CATEGORY_THEMES:
      return {
        ...state,
        currentCategoryThemes: {
          ...action.payload,
        },
      }
    default:
      return state
  }
}
