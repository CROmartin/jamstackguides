import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const Card = styled.div`
  img {
    padding: 0px 8px;
    /* width: 100%; */
    /* height: 100%; */
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
`
function CarouselCard() {
  return (
    <Card>
      <StaticImage src="../../images/image_1.jpeg" width={380}></StaticImage>
    </Card>
  )
}

export default CarouselCard
