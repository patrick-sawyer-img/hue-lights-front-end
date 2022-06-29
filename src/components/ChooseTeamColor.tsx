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
      <Section marginBottom={'0'}>
        <Fragment>
          {teamInfo?.team?.player1 && <Player {...teamInfo?.team.player1} />}
          <Input onChange={handleChange} type="color" value={color} />
          {teamInfo?.team?.player2 && <Player textAlign={'right'} {...teamInfo?.team.player2} />}
        </Fragment>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 600px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,1);
  border: 3px solid #6e2204;
  border-radius: 2px;
  padding: 5px;
`

const Input = styled.input`
  cursor: pointer;

  &:hover {
    border: 1px solid pink;
  }
`