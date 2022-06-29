import { Fragment, useEffect, useState } from "react"
import styled from "styled-components"
import { Match, MatchType } from "../components/Match"
import { Section } from "../components/Section"
import { Title } from "../components/Title"

const URL = 'http://sarco.dyndns.org:8888/dde/'

interface Props {
  changePage: () => void
}

export function Select({
  changePage,
}: Props) {

  const [matches, setMatches] = useState<MatchType[]>([])

  const getMatches = () => {
    fetch(URL + 'matches')
    .then(response => response.json())
    .then(data => setMatches(data));
  }

  const postColors = () => {
    //post to /subscribe
    // {
    //   "eventId" : "xxxxxx",
    //   "p1colour" : "#ffffff",
    //   "p2colour" : "#ffffff"
    // }
  }

  useEffect(() => {
    getMatches()
  }, [])

  return (
    <Wrapper>
      <Section>
        <Title text="Choose your options" />
      </Section>
      <Section>
        <Fragment>
          {matches?.map((match) => {
            return <Match {...match} key={match.eventId} />
          })}
        </Fragment>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div``