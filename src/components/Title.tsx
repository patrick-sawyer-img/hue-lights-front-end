import styled from "styled-components"

interface Props {
  text: string;
}

export function Title({
  text,
}: Props) {
  return <Text>{text}</Text>
}

const Text = styled.div`
  font-size: 30px;
  color: #f06407;
  font-weight: 300;
  letter-spacing: 0.5px;
  padding: 10px;
  text-align: center;
`