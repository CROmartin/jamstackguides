import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px 0;
  justify-content: center;
  margin-bottom: 32px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height, or 193% */
  div {
    font-family: Work Sans;
  }
  text-align: right;
  text-transform: uppercase;

  /* Body text */

  color: #ffb3de;
`
const Number = styled.div`
  margin: 0 8px;
  cursor: pointer;
  font-family: Work Sans;
`

function PageNumber(props) {
  let numbers = [<div></div>]
  for (let i = 0; i < Math.ceil((props.blogNumber + 1) / 8); i++) {
    numbers.push(
      i + 1 !== props.page ? (
        <Number
          onClick={() => {
            props.setPage(i + 1)
            navigate(`${props.location}?page=${i + 1}`)
          }}
        >
          {i + 1}{" "}
        </Number>
      ) : (
        <Number
          onClick={() => {
            props.setPage(i + 1)
            navigate(`${props.location}?page=${i + 1}`)
          }}
          style={{
            textDecoration: `underline`,
          }}
        >
          {i + 1}{" "}
        </Number>
      )
    )
  }

  return (
    <Row>
      <div>Pages: </div> {numbers}
    </Row>
  )
}

export default PageNumber
