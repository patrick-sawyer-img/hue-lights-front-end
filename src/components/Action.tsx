import { useEffect, useState } from "react";
import styled from "styled-components"

export interface Api {
  success: boolean;
  response: string;
}

interface Props {
  text: string;
  onClick: () => Promise<Api>;
  disabled?: boolean;
  onLoadText?: string;
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
  disabled = false
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

  useEffect(() => {
    if (state === States.LOADING) {
      setCurrentText('Loading')
    }
  }, [state])

  return (
    <Wrapper 
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
}>`
  display: flex;
  ${({disabled}) => disabled && 'opacity: 0.2;'}
  align-items: center;
  justify-content: center;
  height: 50px;
  transition: 0.3s;
  text-align: center;
`

export const Button = styled.span<{
  active: boolean;
}>`
  font-size: 18px;
  flex: 1;
  white-space: nowrap;
  text-align: center;
  color: #2e2e2e;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  width: 200px;
  display: flex;
  height: 35px;

  ${({ active }) => active && `
    cursor: pointer;
    background: transparent;
    color: #f06407;
    box-sizing: border-box;

    &:hover {
      color: white;
      background: #d43d0b;
    }
  `}
`