import {
  SET_PLAYER_CURRENT,
  SET_PLAYER_CONTROL,
  SET_PLAYER_VIEW,
  SET_PLAYER_PROGRESS,
  SET_PLAYER_READY,
  SET_PLAYER_SONG,
  SET_PLAYER_PALETTE,
} from './types'

const initialState = {
  ready: false,
  control: 'paused',
  view: 'small',
  progress: 0,
  song: undefined,
  palette: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER_CURRENT:
      return {
        ...state,
        ...action.payload,
      }
    case SET_PLAYER_SONG:
      return {
        ...state,
        song: action.payload,
      }
    case SET_PLAYER_PALETTE:
      return {
        ...state,
        palette: action.payload,
      }
    case SET_PLAYER_CONTROL:
      return {
        ...state,
        control: action.payload,
      }
    case SET_PLAYER_VIEW:
      return {
        ...state,
        view: action.payload,
      }
    case SET_PLAYER_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      }
    case SET_PLAYER_READY:
      return {
        ...state,
        ready: action.payload,
      }
    default:
      return state
  }
}
