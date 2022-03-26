import React from "react"
import styled from "styled-components"
import Button from "../global_elements/button"
import { StaticImage } from "gatsby-plugin-image"

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
  width: 45%;
  h2 {
    text-align: center;
  }
`

const ParagraphS = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  width: 80%;
  margin: auto;

  @media (max-device-width: 900px) {
    display: none;
  }
`

function Paragraphs() {
  return (
    <ParagraphS>
      <Row>
        <Paragraph>
          <h2>Kupi gljive</h2>
          <p>
            Fancy yourself as an amateur mycologist? Then this might be the one
            for you!&nbsp;
            <span>
              We have grow kits available for Pink, Grey and Yellow Oyster - as
              well as Shiitake.&nbsp;
            </span>
            <span>
              This kit includes everything you need to start your own mini
              mushroom farm, all you need to do is open the box, submerge in
              water and spray 3/4 times a day with water!
            </span>
          </p>
          <Button width="150px">Kupi</Button>
        </Paragraph>
        <Paragraph>
          <StaticImage
            src="../../images/download.webp"
            placeholder="blurred"
            layout="constrained"
          />
        </Paragraph>
      </Row>
      <Row>
        <Paragraph>
          <StaticImage
            src="../../images/prodaj.webp"
            placeholder="blurred"
            layout="constrained"
          />
        </Paragraph>
        <Paragraph>
          <h2>Prodaj gljive</h2>
          <p>
            Fancy yourself as an amateur mycologist? Then this might be the one
            for you!&nbsp;
            <span>
              We have grow kits available for Pink, Grey and Yellow Oyster - as
              well as Shiitake.&nbsp;
            </span>
            <span>
              This kit includes everything you need to start your own mini
              mushroom farm, all you need to do is open the box, submerge in
              water and spray 3/4 times a day with water!
            </span>
          </p>
          <Button width="150px">Prodaj</Button>
        </Paragraph>
      </Row>
      <Row>
        <Paragraph>
          <h2>Uzgoji gljive</h2>
          <p>
            Fancy yourself as an amateur mycologist? Then this might be the one
            for you!&nbsp;
            <span>
              We have grow kits available for Pink, Grey and Yellow Oyster - as
              well as Shiitake.&nbsp;
            </span>
            <span>
              This kit includes everything you need to start your own mini
              mushroom farm, all you need to do is open the box, submerge in
              water and spray 3/4 times a day with water!
            </span>
          </p>
          <Button width="150px">Uzgoji</Button>
        </Paragraph>
        <Paragraph>
          <StaticImage
            src="../../images/download.webp"
            placeholder="blurred"
            layout="constrained"
          />
        </Paragraph>
      </Row>
    </ParagraphS>
  )
}

export default Paragraphs
