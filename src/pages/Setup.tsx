import { useState } from "react"
import styled from "styled-components"
import { Pages } from "../App"
import { Action } from "../components/Action"
import { Section } from "../components/Section"
import { Title } from "../components/Title"

interface Props {
  changePage: () => void
}

export function Setup({
  changePage,
}: Props) {

  const [step, setStep] = useState(0);

  const discover = async () => {
    await wait(2000)
    const ipAddress = '10.14.16.65' // API Response
    setStep(1)
    return {
      success: true,
      response: `IP Address: ${ipAddress}`
    }
  }

  const register = async () => {
    await wait(2000)
    setStep(2)
    return {
      success: true,
      response: 'Registered'
    }
  }

  const findLights = async () => {
    await wait(2000)
    const lights = ['1','2','3'] // API Response
    setStep(3)
    changePage()
    return {
      success: true,
      response:`Found ${lights.length + 1} lights`
    }
  }

  const selectLight = async () => {
    return ''
  }

  return (
    <Wrapper>
      <Section>
        <Title text="Connect to your hue lights" />
      </Section>
      <Section>
        <InnerWrapper>
          <Action 
            text="Discover"
            onLoadText="Findining hue box"
            onClick={discover}
          />
          <Action 
            text="Register"
            onLoadText="Registering with hue box"
            onClick={register} 
            disabled={step < 1}
          />
          <Action 
            text="Find lights"
            onLoadText="Finding"
            onClick={findLights} 
            disabled={step < 2}
          />
        </InnerWrapper>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const wait = async (delayInms: number) => {
  return new Promise(resolve  => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}