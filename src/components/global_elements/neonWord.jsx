import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../../svg/logo.svg"
import JamV from "../../svg/jam.svg"

const HeaderS = styled.header`
  /* background: #e09bed; */
  background-image: none;
  /* margin-bottom: 1.45rem; */

  svg {
    fill: #ffffff;
    max-width: 350px;
  }
`

const Div = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const H1 = styled.h1`
  margin: 0;
  ${props => `margin-left: ${props.m};`}
`

const LinkS = styled(Link)`
  fill: white;
  text-decoration: none;
`

const Neon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sign {
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    ${props =>
      !props.off
        ? `background-image: radial-gradient(
      ellipse 50% 35% at 50% 50%,
      #6b1839,
      transparent
    );`
        : ``}

    letter-spacing: 2;
    left: 50%;
    top: 50%;
    font-family: "Clip";
    text-transform: uppercase;
    font-size: ${props => (props.size ? props.size : `1.5em`)};
    @media (max-width: 375px) {
      font-size: ${props =>
        props.size ? `${props.size.split("px")[0] * 0.75}px` : `1.1em`};
    }
    color: #ffe6ff;
    ${props =>
      !props.off
        ? `text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    animation: shine 2s forwards, flicker 3s infinite;`
        : ``}
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
    ${props =>
      !props.off ? `animation: shine 2s forwards, blink 3s 2s infinite;` : ``}
  }

  .fast-flicker {
    ${props =>
      !props.off ? `animation: shine 2s forwards, blink 10s 1s infinite;` : ``}
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

const NeonWord = ({ fast, normal1, slow, normal2, size, off, margin }) => (
  <H1 m={margin}>
    <Neon size={size} off={off}>
      <body>
        <div class="sign">
          <span class="fast-flicker">{fast}</span>
          {normal1}
          <span class="flicker">{slow}</span>
          {normal2}
        </div>
      </body>
    </Neon>
  </H1>
)

export default NeonWord
