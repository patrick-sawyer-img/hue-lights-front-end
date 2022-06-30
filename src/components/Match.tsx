import styled from "styled-components"
import { Player, PlayerType } from "./Player";

export interface TeamType {
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

interface Props extends MatchType {
  onClick: (eventId: string) => void;
}

export function Match({
  teamA,
  teamB,
  tournamentName,
  startTime,
  eventId,
  onClick
}: Props) {
  return (
    <Wrapper onClick={() => {
      onClick(eventId)
    }}>
      <Header>
        <span>
          {tournamentName}
        </span>
        {startTime && (
          <span>
            {startTime.time}
          </span>
        )}
      </Header>
      <Body>
        <Team align={'left'}>
          <Player {...teamA.team.player1} />
          {teamA.team.player2 && <Player {...teamA.team.player2} />}
        </Team>
        <Versus>
          {'vs'}
        </Versus>
        <Team align={'right'}>
          <Player {...teamB.team.player1} />
          {teamA.team.player2 && <Player {...teamA.team.player2} />}
        </Team>
      </Body>
    </Wrapper>
  )
}

const Body = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid black;
  min-height: 50px;
  align-items: center;
  padding: 10px;

  background-color: rgba(255,255,255,0.95);
  border-radius: 2px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.6);
  transition: 0.1s;

  &:hover {
    border: 2px solid white;
  }

  &:active {
    opacity: 0.3;
  }
`

const Team = styled.div<{
  align: string;
}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: ${({ align }) => align};
  gap: 10px;
`

const Versus = styled.span`
  margin: 0 10px;
  font-size: 14px;
  color: #2e2e2e;
`

const Header = styled.div`
  display: flex;
  padding-bottom: 8px;
  font-size: 13px;
  color: #2e2e2e;
  font-weight: 300;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(138, 158, 128, 0.2);
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`