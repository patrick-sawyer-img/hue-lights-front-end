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
      <br />
      <Country>
        {` ${country}`}
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
  font-size: 12px;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
`

const Country = styled.div`
  font-weight: 100;
  opacity: 0.5;
  color: #d64d0d;
  margin-top: 3px;
`