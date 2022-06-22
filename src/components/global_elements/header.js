import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../../svg/logo.svg"
import Jam from "./jam"
import NeonWord from "./neonWord"
const HeaderS = styled.header`
  /* background: #e09bed; */
  background-image: none;
  /* margin-bottom: 1.45rem; */
  height: 324px;
  padding: 24px;

  padding-bottom: 48px;

  @media (max-width: 410px) {
    padding-bottom: 0;
    padding-top: 48px;
  }

  svg {
    fill: #ffffff;
    max-width: 350px;
  }

  border-top: 3px solid #ffb3de;
  border-bottom: 3px solid #ffb3de;

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

const Div = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const H1 = styled.h1`
  margin: 0;
`

const LinkS = styled(Link)`
  color: white;
  text-decoration: none;
`

const Neon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    font-weight: normal;
    display: flex;
    justify-content: center;
  }

  .sign {
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    background-image: radial-gradient(
      ellipse 50% 35% at 50% 50%,
      #6b1839,
      transparent
    );

    letter-spacing: 2;
    left: 50%;
    top: 50%;
    font-family: "Clip";
    text-transform: uppercase;
    font-size: 60px;
    @media (max-width: 768px) {
      font-size: 50px;
    }
    @media (max-width: 600px) {
      font-size: 40px;
    }
    @media (max-width: 410px) {
      font-size: 30px;
    }
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    animation: shine 2s forwards, flicker 3s infinite;
  }

  @keyframes blink {
    0%,
    22%,
    36%,
    75% {
      color: #ffe6ff;
      text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
        -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
        0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    }
    28%,
    33% {
      color: #ff65bd;
      text-shadow: none;
    }
    82%,
    97% {
      color: #ff2483;
      text-shadow: none;
    }
  }

  .flicker {
    animation: shine 2s forwards, blink 3s 2s infinite;
  }

  .fast-flicker {
    animation: shine 2s forwards, blink 10s 1s infinite;
  }

  @keyframes shine {
    0% {
      color: #6b1839;
      text-shadow: none;
    }
    100% {
      color: #ffe6ff;
      text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
        -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
        0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    }
  }

  @keyframes flicker {
    from {
      opacity: 1;
    }

    4% {
      opacity: 0.9;
    }

    6% {
      opacity: 0.85;
    }

    8% {
      opacity: 0.95;
    }

    10% {
      opacity: 0.9;
    }

    11% {
      opacity: 0.922;
    }

    12% {
      opacity: 0.9;
    }

    14% {
      opacity: 0.95;
    }

    16% {
      opacity: 0.98;
    }

    17% {
      opacity: 0.9;
    }

    19% {
      opacity: 0.93;
    }

    20% {
      opacity: 0.99;
    }

    24% {
      opacity: 1;
    }

    26% {
      opacity: 0.94;
    }

    28% {
      opacity: 0.98;
    }

    37% {
      opacity: 0.93;
    }

    38% {
      opacity: 0.5;
    }

    39% {
      opacity: 0.96;
    }

    42% {
      opacity: 1;
    }

    44% {
      opacity: 0.97;
    }

    46% {
      opacity: 0.94;
    }

    56% {
      opacity: 0.9;
    }

    58% {
      opacity: 0.9;
    }

    60% {
      opacity: 0.99;
    }

    68% {
      opacity: 1;
    }

    70% {
      opacity: 0.9;
    }

    72% {
      opacity: 0.95;
    }

    93% {
      opacity: 0.93;
    }

    95% {
      opacity: 0.95;
    }

    97% {
      opacity: 0.93;
    }

    to {
      opacity: 1;
    }
  }
`
const Header = ({ siteTitle }) => (
  <HeaderS>
    <Div>
      <H1>
        <Neon>
          {" "}
          <div>
            <div class="sign">
              <span class="fast-flicker">Jam</span>Stac
              <span class="flicker">k</span>
            </div>
          </div>
          <div style={{ marginLeft: `20px` }}>
            <div class="sign">
              <span class="fast-flicker"> G</span>ui
              <span class="flicker">d</span> es
            </div>
          </div>
        </Neon>
        <Jam></Jam>
      </H1>
    </Div>
  </HeaderS>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
