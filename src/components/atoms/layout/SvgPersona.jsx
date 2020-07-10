import React from 'react'
import styled from 'styled-components'
import { media } from '../../../scss/config/mixins'
import { fromMap } from '../../../tools/getRightComponent'
import { ReactComponent as DefaultPersona } from '../../../assets/images/persona/default-persona.svg'
import { ReactComponent as AymericPersona } from '../../../assets/images/persona/aymeric-persona.svg'
import { ReactComponent as BastienPersona } from '../../../assets/images/persona/bastien-persona.svg'
import { ReactComponent as GabrielPersona } from '../../../assets/images/persona/gabriel-persona.svg'
import { ReactComponent as HelenePersona } from '../../../assets/images/persona/helene-persona.svg'

export default ({ image }) => {
  const map = new Map([
    ['aymeric', <AymericPersona key={1} />],
    ['gabriel', <GabrielPersona key={1} />],
    ['helene', <HelenePersona key={1} />],
    ['bastien', <BastienPersona key={1} />],
    ['' || null, <DefaultPersona key={1} />],
  ])

  return <SvgWrapper>{fromMap(map, image)}</SvgWrapper>
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
      min-height: calc(100% + 23px);
      transform: none;
    `}
  }
`
