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
  font-size: 20px;
  color: #f06407;
  font-weight: 300;
  padding: 10px;
  text-align: center;
`