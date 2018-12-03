import keys from '../keys'

const parentCategoryUrl = cat => {
  switch (cat) {
    case `${keys.domain}/categories/2`:
      return '/kurzmeditationen'
    case `${keys.domain}/categories/3`:
      return '/trancemeditationen'
    case `${keys.domain}/categories/4`:
      return '/kindermedtationen'
    default:
  }
  return false
}

export default parentCategoryUrl
