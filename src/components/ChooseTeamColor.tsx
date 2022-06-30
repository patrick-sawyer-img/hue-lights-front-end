import { Fragment } from "react";
import styled from "styled-components"
import { TeamType } from "./Match";
import { Player } from "./Player";
import { Section } from "./Section";

interface Props {
  teamInfo?: TeamType;
  onColorChange: (color: string) => void;
  color: string;
}

export function ChooseTeamColor({
  teamInfo,
  onColorChange,
  color
}: Props) {

  const handleChange = (e: any) => {
    onColorChange(e.target.value)
  }

  return (
    <Wrapper>
      <Section marginBottom={'0'} padding={'20px'}>
        <Fragment>
          {teamInfo?.team?.player1 && <Player {...teamInfo?.team.player1} />}
          {teamInfo?.team?.player2 && <Player {...teamInfo?.team.player2} />}
          <Input onChange={handleChange} type="color" value={color} />
        </Fragment>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 800px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.7);
  border-radius: 2px;
  overflow: hidden;
`

const Input = styled.input`
  cursor: pointer;
  width: 80px;
  height: 30px;
  
  margin-left: 15px;

  &:hover {
    border: 1px solid pink;
  }
`