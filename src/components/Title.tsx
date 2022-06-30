import styled from "styled-components"
import { COLORS } from "../colors";

interface Props {
  text: string;
}

export function Title({
  text,
}: Props) {
  return <Text>{text}</Text>
}

const Text = styled.div`
  font-size: 24px;
  color: black;
  font-weight: bold;
  padding: 10px;
  text-align: center;
`