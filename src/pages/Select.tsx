import { useState } from "react"
import styled from "styled-components"
import { API } from "../App"
import { ChooseColors } from "../components/ChooseColors"
import { Match, MatchType } from "../components/Match"
import { Section } from "../components/Section"
import { Title } from "../components/Title"

interface Props {
  changePage: () => void;
  matches: MatchType[];
}

export type ColorData = {
  eventId: string | null;
  p1Colour: string;
  p2Colour: string;
}

export const INIT_DATA = {
  eventId: null,
  p1Colour: "#00ffdd",
  p2Colour: "#cc00ff",
}

export function Select({
  changePage,
  matches,
}: Props) {

  const [data, setData] = useState<ColorData>(INIT_DATA)

  const postColors = async () => {
    if (data.eventId && data.p1Colour && data.p2Colour) {
      fetch(API + 'subscribe', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      })
      .then((response) => {
        console.log(response)
        // WHAT DO WE WANT TO DO AFTER SUCCESS
      })
      .catch((response) => {
        console.log(response)
        // WHAT DO WE WANT TO DO AFTER FAILURE
      })
    }
  }

  const selectMatch = (eventId: string) => {
    const nextData = {...data}
    nextData.eventId = eventId
    setData(nextData)
  }

  const singles = matches?.filter((match) => !match.teamA.team.player2)
  const doubles = matches?.filter((match) => !!match.teamA.team.player2)
  const selectedMatch = matches.find((match) => match.eventId === data.eventId)

  return (
    <Wrapper>
      <Section marginBottom="10px">
        <Title text={data.eventId ? `Select a colour for each ${selectedMatch?.teamA.team.player2 ? 'team' : 'player'}` : "Today's live tennis matches"} />
      </Section>
      <Body>
        {data.eventId ? 
          (
            <ChooseColors
              setData={setData}
              data={data}
              match={selectedMatch}
              onSubmit={postColors}
            />
          ) : (
            <>
              <Header>
                {'Singles Matches'}
              </Header>
              <Matches>
                {singles?.map((match) => {
                  return (
                    <Match
                      {...match}
                      key={match.eventId}
                      onClick={selectMatch} />
                  )
                })}
              </Matches>
              <Header>
                {'Doubles Matches'}
              </Header>
              <Matches>
                {doubles?.map((match) => {
                  return (
                    <Match
                      {...match}
                      key={match.eventId}
                      onClick={selectMatch} />
                  )
                })}
              </Matches>
            </>
        )}
      </Body>
    </Wrapper>
  )
}

const Header = styled.div`
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 25px;
`

const Wrapper = styled.div`
  width: 100%;
`

const Matches = styled.div`
  width: 100%;
  gap: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
`

const Body = styled.div`
  margin: 0 15px;
  padding-bottom: 15px;
`