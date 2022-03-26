import * as React from "react"
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"
import styled from "styled-components"
import Facebook from "../../svg/facebook.svg"
import Twitter from "../../svg/twitter.svg"
import Instagram from "../../svg/instagram.svg"
import Youtube from "../../svg/youtube.svg"
import Button from "./button.js"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 765px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    margin: 8px 0;
    margin-bottom: 16px;
  }

  @media (max-width: 765px) {
    margin-top: 16px;
  }
`

const FooterHolder = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 970px;
  width: 80%;
  margin: 64px auto;
  min-height: 190px;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Internals = styled(Link)`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 600;
  :hover {
    color: #728b8c;
    cursor: pointer;
  }
`

const SocialMedia = styled(Link)`
  display: flex;
  flex-direction: row;
  svg {
    margin-right: 16px;
    width: 24px;
    :hover {
      fill: #728b8c !important;
      color: #728b8c;
      cursor: pointer;
    }
  }

  @media (max-width: 765px) {
    margin-top: 16px;
  }
`

const Input = styled.input`
  background: none;
  border: 1px solid #2d3826;
  color: #2d3826;
  border-radius: 0;
  padding: 8px;
  width: 320px;

  @media (max-width: 765px) {
    margin-bottom: 16px;
    width: 100%;
  }
`

const Footer = ({ siteTitle }) => (
  <FooterHolder>
    <Column>
      <Column>
        <Internals>FAQ'S</Internals>
        <Internals>Contact us</Internals>
        <Internals>Privacy policy</Internals>
      </Column>
      <SocialMedia>
        <Facebook />
        <Twitter />
        <Instagram />
        <Youtube />
      </SocialMedia>
    </Column>
    <Column>
      <Column>
        <h4>Pretplatite se na naše obavijesti:</h4>
        <Row>
          <Input type="email" id="email" name="email" placeholder="Email" />

          <Button>Pretplati se</Button>
        </Row>
      </Column>
      <Column>
        <div>Gljive, šumsko meso © 2022</div>
      </Column>
    </Column>
  </FooterHolder>
)

export default Footer
