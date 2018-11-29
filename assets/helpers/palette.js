import * as colors from '../colors'

const category = id => {
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
      return {
        gradient: colors.gradientCharlie,
        color: colors.foxtrot,
      }
    case 5:
      return {
        gradient: colors.gradientFoxtrot,
        color: colors.foxtrot,
      }
    case 6:
      return {
        gradient: colors.gradientBravo,
        color: colors.bravo,
      }
    case 7:
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

export default category
