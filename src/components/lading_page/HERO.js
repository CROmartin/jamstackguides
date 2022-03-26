import React from "react"
import CTAbutton from "../CTA/CTAbutton"
import styled from "styled-components"
import hero from "../../images/hero.webp"
const Image = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${props => props.background});
  background-position: 50% -0.248198vh;
  background-attachment: fixed;
  backface-visibility: hidden;
  transition: all 0.15s ease 0s;
  line-height: 1.5;
  background-repeat: no-repeat;
  background-size: 100% 700px;
  text-align: center;

  div {
    height: 100%;
    width: 100%;
    /* background-color: rgba(0, 0, 0, 0.45); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  color: white;

  h1 {
    text-transform: uppercase;
    font-size: 32px;
  }

  h2 {
    width: 80%;
    text-align: center;
    line-height: 1.5em;
    max-width: 970px;
  }

  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
    background-size: 150% 80%;
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 600px) {
    background-size: 180% 80%;
    height: 320px;
    h2 {
      display: none;
    }
    h1 {
      margin-bottom: 64px;
    }
  }
`
const Row = styled.line`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

function HERO() {
  return (
    <Image background={hero}>
      <div>
        <h1>Dobro došli na Gljive.hr</h1>
        <h2>
          Online trgovina specijalizirana za prodaju gljiva, blokova, kultura i
          drugih potrepština za konzumaciju ili uzgajanje gljiva
        </h2>
        <Row>
          <CTAbutton text="Kupuj" />
          <CTAbutton text="Prodaj" />
        </Row>
      </div>
    </Image>
  )
}

export default HERO
