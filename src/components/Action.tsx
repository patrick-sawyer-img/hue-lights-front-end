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
      setCurrentText('Loading...')
    }
  }, [state])

  return (
    <Wrapper 
      disabled={disabled} 
      onClick={handleClick}
    >
      <Text 
        active={state === States.IDLE && !disabled}
      >
        {currentText}
      </Text>
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

const Text = styled.span<{
  active: boolean;
}>`
  font-size: 18px;
  flex: 1;
  white-space: nowrap;
  text-align: center;
  color: #2b2b2b;
  align-items: center;
  justify-content: center;
  width: 150px;
  display: flex;
  height: 35px;

  ${({ active }) => active && `
    cursor: pointer;
    background: white;
    color: #f06407;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.5);

    &:hover {
      color: white;
      background: #d43d0b;
    }
  `}
`