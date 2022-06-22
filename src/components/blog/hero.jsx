import React from "react"
import styled from "styled-components"
import NeonWord from "../global_elements/neonWord"

const HeroS = styled.div`
  width: 100%;
  /* background: rgba(255, 179, 222, 0.5); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  /* border-top: 3px solid #ffb3de; */
  border-bottom: 3px solid #ffb3de;
  font-family: "Nexa";
  box-shadow: 0 0 20px #ff1493;
  animation: flicker 3s linear infinite;

  @keyframes flicker {
    from {
      box-shadow: 0 0 20px #ff1493;
    }

    5% {
      box-shadow: 0 0 18px #ff1493;
    }

    10% {
      box-shadow: 0 0 19px #ff1493;
    }

    15% {
      box-shadow: 0 0 22px #ff1493;
    }

    20% {
      box-shadow: 0 0 19px #ff1493;
    }

    25% {
      box-shadow: 0 0 18px #ff1493;
    }

    30% {
      box-shadow: 0 0 23px #ff1493;
    }

    35% {
      box-shadow: 0 0 18px #ff1493;
    }

    40% {
      box-shadow: 0 0 20px #ff1493;
    }

    45% {
      box-shadow: 0 0 19px #ff1493;
    }

    50% {
      box-shadow: 0 0 14px #ff1493;
    }

    55% {
      box-shadow: 0 0 17px #ff1493;
    }

    60% {
      box-shadow: 0 0 20px #ff1493;
    }

    65% {
      box-shadow: 0 0 24px #ff1493;
    }

    70% {
      box-shadow: 0 0 21px #ff1493;
    }

    75% {
      box-shadow: 0 0 19px #ff1493;
    }

    80% {
      box-shadow: 0 0 19px #ff1493;
    }

    85% {
      box-shadow: 0 0 14px #ff1493;
    }

    90% {
      box-shadow: 0 0 19px #ff1493;
    }

    95% {
      box-shadow: 0 0 20px #ff1493;
    }

    to {
      box-shadow: 0 0 19px #ff1493;
    }
  }
`
const Title = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 32px;
  font-style: normal;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
  color: #111111;
  font-family: "Nexa";

  @media (max-width: 375px) {
    font-size: 32px;
    line-height: 36px;
    margin-top: 30px;
    margin-bottom: 16px;
  }
`
const Paragraph = styled.div`
  font-family: "Nexa";
  font-weight: normal;
  text-align: center;
  width: 90%;
  max-width: 500px;
  font-size: 22px;
  line-height: 27px;
  margin-bottom: 60px;
  color: #ffb3de;

  @media (max-width: 375px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 30px;
  }
`
function HeroBlog() {
  return (
    <HeroS>
      <Title></Title>
      <NeonWord fast={""} normal1="" slow="B" normal2="log" size="48px" />
      <Paragraph>
        The how-to articles below were created to walk you through problems and
        solutions. If you need help understanding how to create certain feature
        or need help with solving certain problem, please see below for a handy
        step-by-step guide.
      </Paragraph>
    </HeroS>
  )
}

export default HeroBlog
