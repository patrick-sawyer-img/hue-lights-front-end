import { useState } from "react"
import styled from "styled-components"
import { API } from "../App"
import { Button, ChooseColors } from "../components/ChooseColors"
import { Match, MatchType } from "../components/Match"
import { Section } from "../components/Section"
import { Title } from "../components/Title"
import hexToHsl from 'hex-to-hsl'

interface Props {
  matches: MatchType[];
  changeScreen: () => void;
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
  matches,
  changeScreen
}: Props) {

  const [data, setData] = useState<ColorData>(INIT_DATA)

  const postColors = async () => {
    if (data.eventId && data.p1Colour && data.p2Colour) {

      const parsedData = {
        eventId: data.eventId,
        p1Colour: hexToHsl(data.p1Colour),
        p2Colour: hexToHsl(data.p2Colour),
      }

      console.log(parsedData)
      
      fetch(API + 'dde/subscribe', {
        method: 'POST',
        body: JSON.stringify(parsedData),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      })
      .then((response) => {
        console.log(response)
        const newData = {...data}
        newData.eventId = null
        setData(newData)
      })
      .catch((response) => {
        console.log(response)
        alert('Something went wrong')
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
              <ButtonWrapper>
                <Button active onClick={changeScreen}>
                  {'Choose another light'}
                </Button>
              </ButtonWrapper>

              <Header>
                {'Singles Matches'}
              </Header>
              <AllMatches>
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
              </AllMatches>
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

  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
`

const AllMatches = styled.div`

width: calc(100% - 30px);
`

const Body = styled.div`

  padding-bottom: 15px;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const ButtonWrapper = styled.div`
  margin-top: 25px;
`