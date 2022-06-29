import styled from "styled-components"

interface Props {
  children: JSX.Element;
  opacity?: string;
}

export function Section({
  children,
  opacity = '0.9'
}: Props) {
  return (
    <Wrapper opacity={opacity}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{
  opacity: string;
}>`
  background: rgba(255, 255, 255, ${({ opacity }) => opacity});
  padding: 7px 15px;
  margin-bottom: 20px;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`