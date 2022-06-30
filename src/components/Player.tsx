import styled from "styled-components"
import { COLORS } from "../colors";

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
  font-size: 14px;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  margin: 0;
  color: #2f2f3d;
  padding: 0;
  color: ${COLORS.green5};
`

const Country = styled.span`
  font-weight: 100;
  opacity: 0.7;
  font-size: 12px;
  margin-top: 3px;
  color: grey;
`