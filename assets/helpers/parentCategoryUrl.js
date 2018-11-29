const parentCategoryUrl = cat => {
  switch (cat) {
    case 'https://staging.get-wings.de/categories/2':
      return '/kurzmeditationen'
    case 'https://staging.get-wings.de/categories/3':
      return '/trancemeditationen'
    case 'https://staging.get-wings.de/categories/4':
      return '/kindermedtationen'
    default:
  }
  return false
}

export default parentCategoryUrl
