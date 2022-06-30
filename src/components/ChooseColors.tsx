import styled from "styled-components"
import { COLORS } from "../colors";
import { ColorData } from "../pages/Select"
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
    const nextData = {...data}
    nextData.eventId = null
    setData(nextData)
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
      <Versus>{'vs'}</Versus>
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

`

const Versus = styled.span`
  color: white;
  opacity: 0.8;
  font-size: 20px;
  margin: 20px;
`

const Buttons = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 50px;
`

export const Button = styled.span<{
  active: boolean;
}>`
  font-size: 18px;
  flex: 1;
  white-space: nowrap;
  text-align: center;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  width: 200px;
  display: flex;
  height: 35px;
  cursor: pointer;
  background: transparent;
  color: white;
  box-sizing: border-box;


  &:hover {
    color: black;
    background: white;
  }

  &:active {
    color: white;
    background: black;
  }
`