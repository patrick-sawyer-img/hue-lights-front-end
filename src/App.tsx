import { useEffect, useState } from 'react';
import styled from 'styled-components'
import './App.css'
import { Logo } from './components/Logo';
import { MatchType } from './components/Match';
import { Select } from './pages/Select';
import { Setup } from './pages/Setup';

export const API = 'http://sarco.dyndns.org:8888/dde/'

export enum Pages {
  SETUP = 'setup',
  SELECT = 'select'
}

function App() {

  const [page, setPage] = useState<Pages>(Pages.SETUP)
  const [matches, setMatches] = useState<MatchType[]>([])

  const getMatches = () => {
    fetch(API + 'matches')
    .then(response => response.json())
    .then(data => setMatches(data));
  }

  useEffect(() => {
    getMatches()
  }, [])

  return (
    <Wrapper>
      <Logo />
      {page === Pages.SETUP && (
        <Setup 
          changePage={() => {
            setPage(Pages.SELECT)
          }} 
        />
      )}
      {page === Pages.SELECT && (
        <Select
          matches={matches}
          changePage={() => {
            setPage(Pages.SETUP)
          }} 
        />
      )}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: rgba(0,0,0,0.7);
  min-height: 100vh;
`