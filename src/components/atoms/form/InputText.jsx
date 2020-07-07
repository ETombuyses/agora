import React, { forwardRef, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media, toRem } from '../../../scss/config/mixins'

// icon
import { ReactComponent as Icon } from '../../../assets/icons/layout/help-icon.svg'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const InputText = forwardRef((props, ref) => {
  const [isShown, setIsShown] = useState(false)

  const help = useRef(null)

  useEffect(() => {
    if (help.current != null) {
      if (isShown === true) {
        help.current.style.display = 'block'
      } else {
        help.current.style.display = 'none'
      }
    }
  }, [isShown])

  return (
    <InputWrapper className={props.className}>
      <LabelWrapper>
        <Label htmlFor={props.identifyer}>
          {props.label}
          {props.required && <Asterisk>*</Asterisk>}
        </Label>
        {props.hint && (
          <HintWrapper>
            <HelpPopUp ref={help}>
              <span>{props.hintText}</span>
            </HelpPopUp>
            <HelpIcon
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            />
          </HintWrapper>
        )}
      </LabelWrapper>
      <Input
        ref={ref}
        onClick={props.onClickRadio}
        onChange={props.onChangeValue}
        id={props.identifyer}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required ?? false}
        name={props.name}
        defaultChecked={props.checked ?? ''}
      ></Input>
      {props.errorText && <ErrorText>{props.errorText}</ErrorText>}
    </InputWrapper>
  )
})

/* -----------------------------------------------------PROPTYPES------------------------------------------------ */

InputText.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const InputWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;

  svg {
    position: absolute;
    top: 2px;
    margin-left: 8px;
    fill: ${(props) => props.theme.grey};
    width: 16px;
    height: 16px;

    path {
      fill: ${(props) => props.theme.white};
    }
  }
`
const LabelWrapper = styled.div`
  position: relative;
  display: flex;
`

const Label = styled.label`
  /* font-size: 16px; */
  margin-bottom: 7px;
  display: inline-block;
  line-height: 130%;
  max-width: calc(100% - 16px - 8px);
`

const Asterisk = styled.span`
  color: ${(props) => props.theme.red};
`

const Input = styled.input`
  border: none;
  background: ${(props) => props.theme.white};
  border-radius: 5px;
  line-height: 40px;
  /* width: 100%; */
`
const HintWrapper = styled.div`
  ${media.desktop`
    position: relative;
  `}
`

const HelpIcon = styled(Icon)`
  cursor: pointer;
`
const HelpPopUp = styled.div`
  display: none;
  background-color: ${(props) => props.theme.white};
  position: absolute;
  bottom: 40px;
  padding: 15px;
  border-radius: 3px;
  width: 280px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: ${(props) => props.theme.primaryShadow};

  &:after {
    display: none;
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    border-top: ${(props) => '10px solid ' + props.theme.white};
    box-shadow: ${(props) => props.theme.primaryShadow};
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    bottom: -10px;
    left: 134px;
  }

  ${media.desktop`
    left: 9px;
    width: 320px;

    &:after {
      display: block;
      left: 160px;
    }
  `}
`

const ErrorText = styled.p`
  color: ${(props) => props.theme.red};
  /* font-size: ${toRem(14)}; */
  margin-top: 5px;
`
