import * as colors from '../colors'

const palette = id => {
  switch (id) {
    case 2:
      // name: Alltag
      // category_name: Kurzmeditationen
      return {
        gradient: colors.gradientAlpha,
        color: colors.alpha2,
      }
    case 3:
      // name: Arbeit & Leistungsfähigkeit
      // category_name: Kurzmeditationen
      return {
        gradient: colors.gradientFoxtrot,
        color: colors.foxtrot,
      }
    case 5:
      // name: Arbeit & Leistungsfähigkeit
      // category_name: Trancemeditationen
      return {
        gradient: colors.gradientFoxtrot,
        color: colors.foxtrot,
      }
    case 6:
      // name: Gesundheit
      // category_name: Trancemeditationen
      return {
        gradient: colors.gradientBravo,
        color: colors.bravo,
      }
    case 7:
      // name: Kindermedtationen
      // category_name: Kindermedtationen
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
