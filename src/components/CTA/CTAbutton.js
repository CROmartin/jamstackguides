import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const Button = styled(Link)`
  background: #437266;
  padding: 8px;
  border: none;
  font-size: 24px;
  border-radius: 24px;
  cursor: pointer;
  color: white;
  min-width: 128px;
  text-align: center;
  box-shadow: #2d3826 0px 4px 16px;
  margin: 12px;
  h3 {
    margin: 0;
  }
  :hover,
  :active {
    cursor: pointer;
    background: #518a7b;
    box-shadow: #415237 0px 4px 16px;
  }
`
function CTAbutton(props) {
  return <Button to={props.url}>{props.text}</Button>
}

export default CTAbutton
