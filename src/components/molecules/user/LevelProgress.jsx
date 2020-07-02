import React from 'react'
import styled from 'styled-components'
import { media } from '../../../scss/config/mixins'

// icon
import { ReactComponent as HelpIcon } from '../../../assets/icons/layout/help-icon.svg'

// components
import { Tag } from '../../atoms/task/Tag'
import { ProgressCircle } from '../../atoms/chart/ProgressCircle'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const LevelProgress = (props) => {
  return (
    <LevelProgressWrapper className={props.className}>
      <Title>Progression</Title>
      <Icon>
        <HelpIcon />
      </Icon>
      <ContentWrapper>
        <ProgressCircle progress={props.progress} />
        <TagsContent>
          <TagsWrapper>
            <LevelTag text={`Niv. ${props.level}`} />
            <TaxesTag
              text={`${props.taxesReduction} %`}
              color="whiteTransparent"
            />
          </TagsWrapper>
        </TagsContent>
      </ContentWrapper>
      <TagLegend>* Votre réduction d'impôt</TagLegend>
    </LevelProgressWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const LevelProgressWrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 16px 32px 33px 24px;
  border-radius: 10px;
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};

  ${media.desktop`
    padding: 6% 5% 5% 5%;
    width: 38%;
    min-width: 215px;
  `}
`

// help Icon
const Icon = styled.div`
  svg {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.white};

    ${media.desktop`
      top: 16px;
      right: 16px;
      width: 20px;
      height: 20px;
    `}

    path {
      fill: ${(props) => props.theme.green};
    }
  }
`

const Title = styled.h3`
  margin-bottom: 31px;
  font-weight: bold;
  font-size: 16px;

  ${media.desktop`
    font-size: 23px;
    margin-bottom: 15%;
  `}
`
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 115px;
  max-width: 300px;
  margin: 0 auto;

  ${media.desktop`
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: unset;
    height: 84%;
  `}
`
const TagsContent = styled.div`
  height: 100%;

  ${media.desktop`
    height: 40%;
    margin-top: 40px;
  `}
`
const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 5px 0;

  ${media.desktop`
    padding: 0;
  `}
`

const LevelTag = styled(Tag)`
  bottom: 16px;
  left: 16px;
`

const TaxesTag = styled(Tag)`
  bottom: 16px;
  right: 16px;

  ${media.desktop`
    margin-top: 40px;
  `}
`

const TagLegend = styled.span`
  display: block;
  max-width: 300px;
  margin: 22px auto 0 auto;
  font-weight: bold;
  text-align: right;
  font-size: 12px;
  color: ${(props) => props.theme.white};

  ${media.desktop`
    text-align: center;
    margin: 10px auto 0 auto;
  `}
`
