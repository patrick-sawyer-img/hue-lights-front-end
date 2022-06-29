import styled from "styled-components"
import { ColorData, INIT_DATA } from "../pages/Select"
import { Button } from "./Action";
import { ChooseTeamColor } from "./ChooseTeamColor";
import { MatchType } from "./Match";

interface Props {
  data: ColorData;
  setData: (newData: ColorData) => void;
  match?: MatchType;
  onSubmit: () => void;
}

type PlayerKeys = 'p1Colour' | 'p2Colour'

export function ChooseColors({
  data,
  setData,
  match,
  onSubmit
}: Props) {

  const onColorChange = (key: PlayerKeys, color: string) => {
    const newData = {...data}
    newData[key] = color
    setData(newData)
  }

  const goBack = () => {
    setData(INIT_DATA)
  }

  return (
    <Wrapper>
      <ChooseTeamColor 
        teamInfo={match?.teamA}
        color={data.p1Colour}
        onColorChange={(color: string) => {
          onColorChange('p1Colour', color)
        }}
      />
      <ChooseTeamColor
        teamInfo={match?.teamB}
        color={data.p2Colour}
        onColorChange={(color: string) => {
          onColorChange('p2Colour', color)
        }}
      />
      <Buttons>
        <Button active onClick={goBack}>{'Back to matches'}</Button>
        <Button active onClick={onSubmit}>{'Submit'}</Button>
      </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`

// const Button = styled.span`
//   color: white;
//   font-size: 18px;
//   opacity: 0.7;
//   cursor: pointer;
//   position: relative;
//   bottom: 10px;

//   &:hover {
//     opacity: 1;
//   }
// `

const Buttons = styled.div`
  display: flex;
  gap: 50px;
`