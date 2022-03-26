import React from "react"
import styled from "styled-components"
import Button from "../global_elements/button"
import { StaticImage } from "gatsby-plugin-image"
import background1 from "../../images/download.webp"
import background2 from "../../images/prodaj.webp"
import background3 from "../../images/download.webp"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  h2 {
    text-align: center;
  }
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  p {
    font-weight: 600;
  }

  div {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 20% 32px;
  }
`

const ParagraphS = styled.div`
  display: none;
  flex-direction: column;
  max-width: 980px;
  width: 80%;
  margin: auto;

  @media (max-device-width: 900px) {
    display: flex;
  }
`

function ParagraphsMobile() {
  return (
    <ParagraphS>
      <Row>
        <Paragraph background={background1}>
          <div>
            <h2>Kupi gljive</h2>
            <p>Proizvodiš gljive? Neznaš gdje ih prodati? Pokušaj Gljive.hr!</p>

            <Button width="150px">Kupi</Button>
          </div>
        </Paragraph>
      </Row>
      <Row>
        <Paragraph background={background2}>
          <div>
            <h2>Prodaj gljive</h2>
            <p>Proizvodiš gljive? Neznaš gdje ih prodati? Pokušaj Gljive.hr!</p>
            <Button width="150px">Prodaj</Button>
          </div>
        </Paragraph>
      </Row>
      <Row>
        <Paragraph background={background3}>
          <div>
            <h2>Uzgoji gljive</h2>
            <p>Proizvodiš gljive? Neznaš gdje ih prodati? Pokušaj Gljive.hr!</p>
            <Button width="150px">Uzgoji</Button>
          </div>
        </Paragraph>
      </Row>
    </ParagraphS>
  )
}

export default ParagraphsMobile
