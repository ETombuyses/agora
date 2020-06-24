import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HelpIcon } from '../../assets/icons/help-icon.svg'
import { Tag } from '../atoms/Tag'
import { ProgressCircle } from '../atoms/ProgressCircle'

const LevelProgressWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  background: ${(props) => props.theme.green};
  padding: 16px 32px 50px 24px;
  text-align: center;
  color: ${(props) => props.theme.white};
`

const Icon = styled.div`
  svg {
    position: absolute;
    top: 8px;
    right: 8px;
    fill: ${(props) => props.theme.white};
    width: 16px;
    height: 16px;

    path {
      fill: ${(props) => props.theme.green};
    }
  }
`

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 31px;
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
  margin: 0 auto;
  max-width: 300px;
`

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 5px 0;
`

const TagLegend = styled.span`
  font-size: 10px;
  display: inline-block;
  text-align: center;
  max-width: 78px;
  margin-top: 10px;
`

const TagsContent = styled.div`
  height: 100%;
`

export const LevelProgress = () => {
  return (
    <LevelProgressWrapper>
      <Title>Progression</Title>
      <Icon>
        <HelpIcon />
      </Icon>
      <ContentWrapper>
        <ProgressCircle />
        <TagsContent>
          <TagsWrapper>
            <LevelTag text="Niv. 1" />
            <TaxesTag text="1,2%" color="whiteTransparent" />
          </TagsWrapper>
          <TagLegend>Votre réduction d'impôt</TagLegend>
        </TagsContent>
      </ContentWrapper>
    </LevelProgressWrapper>
  )
}
