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
  const [textColor, setTextColor] = useState('#c26223')

  const handleClick = async () => {
    if (state !== States.IDLE || disabled) return
    setState(States.LOADING)
    const { response, success } = await onClick()
    setCurrentText(response)
    setState(success ? States.SUCCESS : States.FAILED)
  }

  useEffect(() => {
    if (state === States.FAILED) {
      setTextColor('red')
      return;
    }
    if (state === States.SUCCESS) {
      setTextColor('#f06407;')
      return;
    }
    if (state === States.LOADING) {
      setCurrentText('Loading')
    }
  }, [state])

  return (
    <Wrapper 
      disabled={disabled} 
      onClick={handleClick}
    >
      <Text 
        color={textColor} 
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
  text-align: center;
`

const Text = styled.span<{
  active: boolean;
  color: string;
}>`
  font-size: 22px;
  flex: 1;
  white-space: nowrap;
  font-weight: 500;
  text-align: center;
  color: ${({ color }) => color};

  ${({ active }) => active && `
    cursor: pointer;

    &:hover {
      color: #f06407;
    }
  `}
`