import { ReactComponent as DefaultPersona } from '../assets/images/persona/default-persona.svg'
import { ReactComponent as AymericPersona } from '../assets/images/persona/aymeric-persona.svg'
import { ReactComponent as BastienPersona } from '../assets/images/persona/bastien-persona.svg'
import { ReactComponent as GabrielPersona } from '../assets/images/persona/gabriel-persona.svg'
import { ReactComponent as HelenePersona } from '../assets/images/persona/helene-persona.svg'

export default (data) => {
  let SvgComponent
  let image = ''

  if (data) {
    image = data.image
  }

  switch (image) {
    case 'aymeric':
      SvgComponent = AymericPersona
      break
    case 'bastien':
      SvgComponent = BastienPersona
      break
    case 'helene':
      SvgComponent = HelenePersona
      break
    case 'gabriel':
      SvgComponent = GabrielPersona
      break
    default:
      SvgComponent = DefaultPersona
  }

  return SvgComponent
}
