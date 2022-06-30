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
  font-size: 20px;
  color: ${COLORS.green5};
  padding: 10px;
  text-align: center;
`