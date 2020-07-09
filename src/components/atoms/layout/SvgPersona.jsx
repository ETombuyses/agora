import React from 'react'
import styled from 'styled-components'
import { media } from '../../../scss/config/mixins'
import { ReactComponent as DefaultPersona } from '../../../assets/images/persona/default-persona.svg'
import { ReactComponent as AymericPersona } from '../../../assets/images/persona/aymeric-persona.svg'
import { ReactComponent as BastienPersona } from '../../../assets/images/persona/bastien-persona.svg'
import { ReactComponent as GabrielPersona } from '../../../assets/images/persona/gabriel-persona.svg'
import { ReactComponent as HelenePersona } from '../../../assets/images/persona/helene-persona.svg'

export default ({ image }) => {
  return (
    <SvgWrapper>
      {
        image === 'aymeric' ? <AymericPersona />
        : image === 'gabriel' ? <GabrielPersona />
        : image === 'helene' ? <HelenePersona />
        : image === 'bastien' ? <BastienPersona />
        : <DefaultPersona />
      }
    </SvgWrapper>
  )
}

const SvgWrapper = styled.div`
  svg {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 38%;
    height: auto;
    max-height: calc(100% + 20px);
    border-radius: 9px;
    transform: scaleX(-1);

    ${media.desktop`
      right: unset;
      left: 10%;
      width: unset;
      max-width: 20%;
      height: calc(100% + 10px);
      min-height: calc(100% + 40px);
      transform: none;
    `}
  }
`
