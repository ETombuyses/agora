import React from 'react'
import styled from 'styled-components'
import { media } from '../../../scss/config/mixins'
import { ReactComponent as DefaultProfile } from '../../../assets/images/profile/default-profile.svg'
import { ReactComponent as AymericProfile } from '../../../assets/images/profile/aymeric-profile.svg'
import { ReactComponent as BastienProfile } from '../../../assets/images/profile/bastien-profile.svg'
import { ReactComponent as GabrielProfile } from '../../../assets/images/profile/gabriel-profile.svg'
import { ReactComponent as HeleneProfile } from '../../../assets/images/profile/helene-profile.svg'

export default ({ image }) => {
  return (
    <SvgWrapper>
      {
        image === 'aymeric' ? <AymericProfile />
        : image === 'gabriel' ? <GabrielProfile />
        : image === 'helene' ? <HeleneProfile />
        : image === 'bastien' ? <BastienProfile />
        : <DefaultProfile />
      }
    </SvgWrapper>
  )
}

const SvgWrapper = styled.div`
  svg {
    width: 70px;
    height: 70px;
    min-height: 70px;
    background: ${(props) => props.theme.grassGreen};
    border-radius: 50%;
    margin-bottom: 16px;
  
    ${media.desktop`
      width: 100px;
      height: 100px;
      min-height: 100px;
      margin-bottom: 16px;
    `}
  
    ${media.large`
      width: 120px;
      height: 120px;
      min-height: 120px;
    `}
  }
`
