import styled from "styled-components"

export interface PlayerType {
  id: string;
  firstName: string;
  lastName: string;
  country: string;
}

export function Player({
  id,
  firstName,
  lastName,
  country,
}: PlayerType) {
  return (
    <Wrapper>
      {`${lastName.toUpperCase()}, ${firstName}: ${country}`}
    </Wrapper>
  )
}

const Wrapper = styled.div``