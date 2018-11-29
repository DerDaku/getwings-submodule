import { grey1 } from '../colors'
import { em, fontWeightRegular, lineheightHeading } from '../units'

export default function({ _em }) {
  const fontSize = em * _em

  return { fontSize, fontWeight: fontWeightRegular, lineHeight: lineheightHeading, color: grey1 }
}
