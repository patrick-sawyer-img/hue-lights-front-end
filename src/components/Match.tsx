import styled from "styled-components"
import { Player, PlayerType } from "./Player";

interface TeamType {
  status: string;
  team: {
    player1: PlayerType;
    player2?: PlayerType;
  }
}

export interface MatchType {
  teamA: TeamType;
  teamB: TeamType;
  tournamentName: string;
  startTime: {
    status: string;
    time?: string;
  }
  eventId: string;
}

export function Match({
  teamA,
  teamB,
  tournamentName,
  startTime,
  eventId
}: MatchType) {


  return (
    <Wrapper>
      <Player {...teamA.team.player1} />
      {teamA.team.player2 && <Player {...teamA.team.player2} />}
      {'Vs'}
      <Player {...teamB.team.player1} />
      <Player {...teamB.team.player1} />
      {teamA.team.player2 && <Player {...teamA.team.player2} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`

`