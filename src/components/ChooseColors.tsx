import styled from "styled-components"
import { ColorData } from "../pages/Select"
import { MatchType } from "./Match";

interface Props {
  data: ColorData;
  setData: (newData: ColorData) => void;
  match?: MatchType;
}

export function ChooseColors({
  data,
  setData,
  match
}: Props) {

  const onColorChange = (player: 'p1color' | 'p2color', color: string) => {
    const newData = {...data}
    data[player] = color
    setData(newData)
  }

  return (
    <Wrapper>

    </Wrapper>
  )
}

const Wrapper = styled.div`
`