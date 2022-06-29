import { useState } from 'react';
import styled from 'styled-components'
import './App.css'
import { Logo } from './components/Logo';
import { Select } from './pages/Select';
import { Setup } from './pages/Setup';

enum Pages {
  SETUP = 'setup',
  SELECT = 'select'
}

function App() {

  const [page, setPage] = useState<Pages>(Pages.SELECT)

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
          changePage={() => {
            setPage(Pages.SETUP)
          }} 
        />
      )}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``