import { ReactComponent as DefaultProfile } from '../assets/images/profile/default-profile.svg';
import { ReactComponent as AymericProfile } from '../assets/images/profile/aymeric-profile.svg';
import { ReactComponent as BastienProfile } from '../assets/images/profile/bastien-profile.svg';
import { ReactComponent as GabrielProfile } from '../assets/images/profile/gabriel-profile.svg';
import { ReactComponent as HeleneProfile } from '../assets/images/profile/helene-profile.svg';

export default (name) => {
  let SvgComponent;

  switch (name) {
    case 'aymeric':
      SvgComponent = AymericProfile;
      break;
    case 'bastien':
      SvgComponent = BastienProfile;
      break;
    case 'helene':
      SvgComponent = HeleneProfile;
      break;
    case 'gabriel':
      SvgComponent = GabrielProfile;
      break;
    default:
      SvgComponent = DefaultProfile;
  }

  return SvgComponent;
}
