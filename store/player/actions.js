import {
  SET_PLAYER_CURRENT,
  SET_PLAYER_SONG,
  SET_PLAYER_CONTROL,
  SET_PLAYER_VIEW,
  SET_PLAYER_PROGRESS,
  SET_PLAYER_READY,
  SET_PLAYER_PALETTE,
} from './types'

import { helpers } from '../../assets'

const setPlayerCurrent = payload => ({
  type: SET_PLAYER_CURRENT,
  payload,
})

const setPlayerPalette = payload => {
  const palette = helpers.palette(parseInt(payload, 0))
  return {
    type: SET_PLAYER_PALETTE,
    payload: palette,
  }
}

const setPlayerSong = payload => ({
  type: SET_PLAYER_SONG,
  payload,
})

const setPlayerControl = payload => ({
  type: SET_PLAYER_CONTROL,
  payload,
})

const setPlayerView = payload => ({
  type: SET_PLAYER_VIEW,
  payload,
})

const setPlayerProgress = payload => ({
  type: SET_PLAYER_PROGRESS,
  payload,
})

const setPlayerReady = payload => ({
  type: SET_PLAYER_READY,
  payload,
})

export {
  setPlayerCurrent,
  setPlayerControl,
  setPlayerView,
  setPlayerProgress,
  setPlayerReady,
  setPlayerSong,
  setPlayerPalette,
}
