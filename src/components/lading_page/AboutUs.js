import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const AboutUsS = styled.p`
  /* color: #2d3826; */
  line-height: 32px;
  font-size: 20px;
  width: 80%;
  max-width: 970px;
  margin: auto;
  margin-top: 32px;
  text-align: center;
  border-bottom: 1px solid #e1e1e1;
  border-top: 1px solid #e1e1e1;

  /* border-radius: 4px; */
  padding: 16px;
`

const ReadMore = styled(Link)`
  background-color: #728b8c;
  color: #fff;
  border: none;
  border-radius: 2px;
  padding: 10px 18px;
  font-size: 18px;
  font-weight: 500;
  margin: 32px;
  :hover {
    background-color: #829fa1;
    cursor: pointer;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
function AboutUs() {
  return (
    <Column>
      <AboutUsS>
        Gljive.hr je osnovan od strane dvoje mladih entuziasta u gljive koji su
        bazirani u Karlovcu u nadi stvaranja zajednice koja proizvodi i
        konzumira gljive{" "}
      </AboutUsS>
      <ReadMore>Više o nama</ReadMore>
    </Column>
  )
}

export default AboutUs
