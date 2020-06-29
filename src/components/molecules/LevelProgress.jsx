import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HelpIcon } from '../../assets/icons/help-icon.svg'
import { Tag } from '../atoms/Tag'
import { ProgressCircle } from '../atoms/ProgressCircle'

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
            <LevelTag text="Niv. 1" />
            <TaxesTag text="1,2%*" color="whiteTransparent" />
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
`

const Icon = styled.div`
  svg {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.white};

    path {
      fill: ${(props) => props.theme.green};
    }
  }
`

const Title = styled.h3`
  margin-bottom: 31px;
  font-weight: bold;
  font-size: 16px;
`

const LevelTag = styled(Tag)`
  bottom: 16px;
  left: 16px;
`

const TaxesTag = styled(Tag)`
  bottom: 16px;
  right: 16px;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 115px;
  max-width: 300px;
  margin: 0 auto;
`

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 5px 0;
`

const TagsContent = styled.div`
  height: 100%;
`

const TagLegend = styled.span`
  display: block;
  max-width: 300px;
  margin: 22px auto 0 auto;
  font-weight: bold;
  text-align: right;
  font-size: 12px;
  color: ${(props) => props.theme.white};
`
