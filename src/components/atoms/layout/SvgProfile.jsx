import React from 'react'
import styled from 'styled-components'
import { media } from '../../../scss/config/mixins'
import { fromMap } from '../../../tools/getRightComponent'
import { ReactComponent as DefaultProfile } from '../../../assets/images/profile/default-profile.svg'
import { ReactComponent as AymericProfile } from '../../../assets/images/profile/aymeric-profile.svg'
import { ReactComponent as BastienProfile } from '../../../assets/images/profile/bastien-profile.svg'
import { ReactComponent as GabrielProfile } from '../../../assets/images/profile/gabriel-profile.svg'
import { ReactComponent as HeleneProfile } from '../../../assets/images/profile/helene-profile.svg'

export default ({ image }) => {
  const map = new Map([
    ['aymeric', <AymericProfile key={1} />],
    ['gabriel', <GabrielProfile key={1} />],
    ['helene', <HeleneProfile key={1} />],
    ['bastien', <BastienProfile key={1} />],
    ['' || null, <DefaultProfile key={1} />],
  ])

  return (
    <SvgWrapper>
      {
        fromMap(map, image)
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
