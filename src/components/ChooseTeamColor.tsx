import { Fragment } from "react";
import styled from "styled-components"
import { TeamType } from "./Match";
import { Player } from "./Player";
import { Section } from "./Section";

interface Props {
  teamInfo?: TeamType;
  onColorChange: (color: string) => void;
}

export function ChooseTeamColor({
  teamInfo,
  onColorChange,
}: Props) {
  return (
    <Wrapper>
      <Section>
        <Fragment>
        {teamInfo?.team?.player1 && <Player {...teamInfo?.team.player1} />}
        {teamInfo?.team?.player2 && <Player {...teamInfo?.team.player2} />}
        </Fragment>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1;
  gap: 10px;
`