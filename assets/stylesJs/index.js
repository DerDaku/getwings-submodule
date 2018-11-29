import * as helpers from '../helpers'
import * as units from '../units'
import * as colors from '../colors'

export default {
  font: {
    // tags & sizes
    title: {
      ...helpers.heading({ _em: 3 }),
      margin: 0,
      color: colors.alpha1,
      fontWeight: units.fontWeightBlack,
    },
    h1: {
      ...helpers.heading({ _em: 2.5 }),
    },
    h2: {
      ...helpers.heading({ _em: 1.75 }),
    },
    h3: {
      ...helpers.heading({ _em: 1.5 }),
    },
    h4: {
      ...helpers.heading({ _em: 1.25 }),
    },
    h5: {
      ...helpers.heading({ _em: 1.125 }),
    },
    h6: {
      ...helpers.heading({ _em: 1 }),
      lineHeight: 1.75,
    },
  },
  grid: {
    display: 'grid',
    width: '100%',
    maxWidth: 1320,
    margin: '0 auto',
    gridGap: units.gutter,
    paddingLeft: units.gutter * 2,
    paddingRight: units.gutter * 2,
  },
  reset: {
    button: {
      background: 'none',
      border: 'none',
      appearance: 'none',
      boxShadow: 'none',
      padding: 0,
      margin: 0,
      cursor: 'pointer',
      fontSize: units.em,
      textAlign: 'left',
    },
  },
}
