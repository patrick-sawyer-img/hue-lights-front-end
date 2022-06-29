import { Fragment, useEffect, useRef, useState } from "react"
import styled from "styled-components"
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
  p1color: string | null;
  p2color: string | null;
}

export function Select({
  changePage,
  matches,
}: Props) {

  const [data, setData] = useState<ColorData>({
    eventId: null,
    p1color: null,
    p2color: null,
  })

  const postColors = () => {
    //post to /subscribe with data.current
    // {
    //   "eventId" : "xxxxxx",
    //   "p1colour" : "#ffffff",
    //   "p2colour" : "#ffffff"
    // }
  }

  const selectMatch = (eventId: string) => {
    setData({
      eventId,
      p1color: null,
      p2color: null,
    })
  }

  return (
    <Wrapper>
      <Section marginBottom="10px">
        <Title text={data.eventId ? "Select a colour for each team" : "Today's live tennis matches"} />
      </Section>
      <Body>
        {data.eventId ? 
          (
            <ChooseColors 
              setData={setData}
              data={data}
              match={matches.find((match) => match.eventId === data.eventId)}
            />
          ) : (
            <Matches>
              {matches?.map((match) => {
                return (
                  <Match 
                    {...match} 
                    key={match.eventId} 
                    onClick={selectMatch} 
                  />
                )
              })}
            </Matches>
          )}
      </Body>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const Matches = styled.div`
  width: 100%;
  gap: 15px;
  padding: 8px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
`

const Body = styled.div`
  margin: 0 15px;
`