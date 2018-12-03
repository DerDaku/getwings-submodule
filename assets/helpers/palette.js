import * as colors from '../colors'

const palette = id => {
  switch (id) {
    case 2:
      return {
        gradient: colors.gradientAlpha,
        color: colors.alpha2,
      }
    case 3:
      return {
        gradient: colors.gradientFoxtrot,
        color: colors.foxtrot,
      }
    case 4:
      // kindermedtationen
      return {
        gradient: colors.gradientCharlie,
        color: colors.charlie,
      }
    default: {
      return {
        gradient: colors.gradientAlpha,
        color: colors.alpha2,
      }
    }
  }
}

export default palette
