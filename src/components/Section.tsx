import styled from "styled-components"

interface Props {
  children: JSX.Element
}

export function Section({
  children
}: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 7px 15px;
  margin-bottom: 20px;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`