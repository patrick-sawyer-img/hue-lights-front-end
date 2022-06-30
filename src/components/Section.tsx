import styled from "styled-components"

interface Props {
  children: JSX.Element;
  opacity?: string;
  marginBottom?: string;
  padding?: string;
}

export function Section({
  children,
  opacity = '0.9',
  marginBottom,
  padding
}: Props) {
  return (
    <Wrapper padding={padding} marginBottom={marginBottom} opacity={opacity}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{
  opacity: string;
  marginBottom?: string;
  padding?: string;
}>`
  background: rgba(255, 255, 255, ${({ opacity }) => opacity});
  padding: ${({ padding }) => padding || '7px 15px'};
  margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : '50px'};
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`