import { useState } from "react"
import styled from "styled-components"
import { API } from "../App"
import { Action } from "../components/Action"
import { Section } from "../components/Section"
import { Title } from "../components/Title"

interface Props {
  changePage: () => void
}

interface Light {
  name: string;
  number: number;
  uniqueId: string;
}

export function Setup({
  changePage,
}: Props) {

  const [lights, setLights] = useState<Light[]>([]);

  const findLights = async () => {
    const response = await fetch(API + 'hue/lights')
    .then(data => data.json())
    const data: Light[]= Object.values(response)
    setLights(data)

    return {
      success: true,
      response:`Found ${data.length} lights`
    }
  }

  const selectLight = async (data: Light) => {
    await fetch(API + 'hue/lights', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(() => {
      changePage()
    })
    .catch((response) => {
      console.log(response)
      alert('Something went wrong')
    })

    return {
      success: true,
      response: 'Selected'
    }
  }

  return (
    <Wrapper>
      <Section>
        <Title text="Connect to your hue lights" />
      </Section>
      <Section>
        <InnerWrapper>
          <Action 
            text="Find lights"
            onClick={findLights}
          />
          {!!lights.length && (
            <>
              <Line />
              <Lights>
                {lights.map(({ name, number, uniqueId }) => {
                  return (
                    <Action 
                      text={name}
                      key={name}
                      onClick={async () => {
                        return await selectLight({
                          number, name, uniqueId
                        })
                      }} 
                    />
                  )
                })}
              </Lights>
            </>
          )}
        </InnerWrapper>
      </Section>
    </Wrapper>
  )
}

const Line = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  width: 50%;
  margin-bottom: 10px;
`

const Wrapper = styled.div`
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  gap: 20px;
  width: 100%;
`

const Lights = styled.div`
  width: 100%;
  max-width: 900px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
`