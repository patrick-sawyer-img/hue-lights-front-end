import styled from "styled-components"
import { ColorData } from "../pages/Select"
import { ChooseTeamColor } from "./ChooseTeamColor";
import { MatchType } from "./Match";

interface Props {
  data: ColorData;
  setData: (newData: ColorData) => void;
  match?: MatchType;
}

type PlayerKeys = 'p1color' | 'p2color'

export function ChooseColors({
  data,
  setData,
  match
}: Props) {

  const onColorChange = (key: PlayerKeys, color: string) => {
    const newData = {...data}
    data[key] = color
    setData(newData)
  }

  return (
    <Wrapper>
      <ChooseTeamColor 
        teamInfo={match?.teamA}
        onColorChange={(color: string) => {
          onColorChange('p1color', color)
        }}
      />
      <ChooseTeamColor
        teamInfo={match?.teamB}
        onColorChange={(color: string) => {
          onColorChange('p2color', color)
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`