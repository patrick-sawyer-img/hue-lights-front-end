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
      <LastName>
        {lastName.toUpperCase() + ','}
      </LastName>
      <FirstName>
        {` ${firstName}`}
      </FirstName>

      <Country>
        {` (${country})`}
      </Country>
    </Wrapper>
  )
}

const LastName = styled.span`
  font-weight: 600;
`

const FirstName = styled.span`
  font-weight: 100;
  opacity: 0.7;
`

const Wrapper = styled.p`
  font-size: 16px;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  margin: 0;
  color: #2f2f3d;
  padding: 0;
  color: black;
`

const Country = styled.span`
  font-weight: 100;
  font-size: 12px;
  opacity: 0.4;
  color: #2e2e2e;

`