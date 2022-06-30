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
  font-size: 22px;
  color: black;
  padding: 10px;
  text-align: center;
`