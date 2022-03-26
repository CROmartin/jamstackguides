import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ButtonStyle = styled(Link)`
  background-color: #2d3826;
  color: #fff;
  border: none;
  border-radius: 2px;
  padding: 10px 18px;
  font-size: 18px;
  text-wrap: nowrap;
  min-width: 130px;
  text-align: center;
  max-width: ${props => (props.width ? props.width : "100%")};

  a {
    text-wrap: nowrap;
  }
  :hover {
    background-color: #728b8c;
    cursor: pointer;
  }
  /* box-shadow: rgba() #364954 0px 4px 4px; */
`
function Button({ children, width }) {
  return <ButtonStyle width={width}>{children}</ButtonStyle>
}

export default Button
