import styled from "styled-components"
import image from '../assets/img2.png'
export function Logo() {
  return (
    <Wrapper>
      <img src={image} alt={'Tennis'} style={{
        width: '100%',
        height: 200,
        objectFit: 'contain'
      }}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
