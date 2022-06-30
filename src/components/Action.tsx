import { useState } from "react";
import styled from "styled-components"

export interface Api {
  success: boolean;
  response: string;
}

interface Props {
  text: string;
  onClick: () => Promise<Api>;
  disabled?: boolean;
  bold?: boolean;
}

enum States {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILED = 'failed'
}

export function Action({
  text,
  onClick,
  disabled = false,
  bold = false,
}: Props) {

  const [currentText, setCurrentText] = useState<string>(text)
  const [state, setState] = useState<States>(States.IDLE)

  const handleClick = async () => {
    if (state !== States.IDLE || disabled) return
    setState(States.LOADING)
    const { response, success } = await onClick()
    setCurrentText(response)
    setState(success ? States.SUCCESS : States.FAILED)
  }

  return (
    <Wrapper
      bold={bold}
      disabled={disabled} 
      onClick={handleClick}
    >
      <Button 
        active={state === States.IDLE && !disabled}
      >
        {currentText}
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div<{
  disabled?: boolean;
  bold?: boolean;
}>`
  display: flex;
  ${({disabled}) => disabled && 'opacity: 0.2;'}
  ${({bold}) => bold && 'font-weight: bold;'}
  align-items: center;
  justify-content: center;
  min-width: 200px;
  text-align: center;

`

export const Button = styled.span<{
  active: boolean;
}>`
  font-size: 18px;
  flex: 1;
  white-space: nowrap;
  text-align: center;
  color: black;
  border-radius: 2px;
  transition: 0.3s;
  align-items: center;
  justify-content: center;
  width: 200px;
  display: flex;
  height: 35px;

  ${({ active }) => active && `
    cursor: pointer;
    background: transparent;
    box-sizing: border-box;

    &:hover {
      color: white;
      background: black;
    }

    &:active {
      background: transparent;
      color: black;
    }
  `}
`