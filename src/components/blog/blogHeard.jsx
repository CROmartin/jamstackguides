import React from "react"
import styled from "styled-components"
import DropdownButton from "./dropdownButton"
import { Link } from "gatsby"
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 80%;
  max-width: 1028px;

  @media (max-width: 460px) {
    flex-wrap: wrap;
    justify-content: center;
    Link {
      flex-basis: 100%;
    }
  }

  @media (max-width: 720px) {
    max-width: 486px;
  }
`
const MainTitle = styled.h1`
  width: 100%;
  margin: 0 auto;
  text-align: left;
  font-size: 32px;
  line-height: 36px;
  margin-top: 24px;
  margin-bottom: 24px;
  color: #e44331;
  margin-top: 36px;
  &:hover {
    color: red;
  }

  @media (max-width: 460px) {
    flex-wrap: wrap;
    flex-basis: 100%;
  }
`

function BlogHeader(props) {
  return (
    <Row>
      <Link to="/blog">
        <MainTitle>{props.title}</MainTitle>
      </Link>
      <DropdownButton btnText={props.btnText} />
    </Row>
  )
}

export default BlogHeader
