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
`

const LinkS = styled(Link)`
  fill: white;
  text-decoration: none;
`

const Neon = styled.div`
  height: 90px;
  font-family: "Clip";

  display: flex;
  justify-content: center;

  .testing {
    /* filter: url("#blurFilter"); */

    width: 90px;
    height: 90px;

    svg {
      animation: flickerL 7s linear infinite;
      filter: url("#blurFilter");
      stroke: #ffb3de;
      g {
        fill: #ffb3de;
      }
    }
  }

  .logo {
    position: absolute;
  }

  svg {
    width: 90px;
    height: 180px;
    stroke: #ff1493;
    g {
      fill: #ffc1cc;
    }
  }

  @keyframes flickerL {
    from {
      opacity: 1;
    }

    4% {
      opacity: 0.9;
    }

    6% {
      opacity: 0.75;
    }

    8% {
      opacity: 0.95;
    }

    10% {
      opacity: 0.7;

      width: 95px;
      height: 190px;
      transform: translate(-2.5px, -5px);
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
      opacity: 0.78;
      width: 90px;
      height: 180px;
      transform: translate(0, 0);
    }

    17% {
      opacity: 0.9;
    }

    19% {
      opacity: 0.93;
    }

    20% {
      opacity: 0.99;
      width: 98px;
      height: 196px;
      transform: translate(-4px, -8px);
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
      width: 90px;
      height: 180px;
      transform: translate(0, 0);
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

    50% {
      opacity: 0.6;
    }

    58% {
      opacity: 0.9;
      width: 90px;
      height: 180px;
      transform: translate(0, 0);
    }

    60% {
      opacity: 0.99;
    }

    68% {
      opacity: 0.7;
    }

    70% {
      opacity: 0.9;
    }

    72% {
      opacity: 0.95;
      width: 95px;
      height: 190px;
      transform: translate(-2.5px, -5px);
    }

    93% {
      opacity: 0.93;
    }

    95% {
      opacity: 0.95;
    }

    97% {
      opacity: 0.93;
      stroke: none;
    }

    to {
      opacity: 1;
    }
  }
`
const Jam = ({ siteTitle }) => (
  <Neon>
    <svg width="0" height="0" style={{ display: `none` }}>
      <defs>
        <filter id="blurFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
    </svg>

    <div className="logo">
      <JamV />
    </div>
    <div className="testing">
      <JamV />
    </div>
  </Neon>
)

export default Jam
