import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import Linkedin from "../../images/blog/Linkedin-13.svg"
import Twitter from "../../images/blog/Twitter-19.svg"
import Facebook from "../../images/blog/Facebook.svg"

const Article = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  transition: width 1s;
  box-shadow: 0 -5px 5px -5px rgba(255, 179, 222, 0.7),
    0 5px 5px -5px rgba(255, 179, 222, 0.7) inset;
  /* background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.25)
  ); */
  background-color: rgba(0, 0, 0, 0.4);

  @media (max-width: 980px) {
    width: 75%;
  }
  @media (max-width: 375px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  margin: auto;
  border-top: 1px solid #ffb3de;

  padding-top: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
`

const Picture = styled(GatsbyImage)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 100%;
  margin: 16px;
  min-width: 135px;
  width: 135px;
  height: 135px;
  align-self: flex-start;
  border: 3px solid #ffb3de;

  box-shadow: 0 0 20px #ff1493, 0 0 20px #ff1493 inset;
  animation: flickerPic 3s linear infinite;

  @keyframes flickerPic {
    from {
      box-shadow: 0 0 20px #ff1493, 0 0 20px #ff1493 inset;
    }

    5% {
      box-shadow: 0 0 18px #ff1493, 0 0 18px #ff1493 inset;
    }

    10% {
      box-shadow: 0 0 19px #ff1493, 0 0 19px #ff1493 inset;
    }

    15% {
      box-shadow: 0 0 22px #ff1493, 0 0 22px #ff1493 inset;
    }

    20% {
      box-shadow: 0 0 19px #ff1493, 0 0 19px #ff1493 inset;
    }

    25% {
      box-shadow: 0 0 18px #ff1493, 0 0 18px #ff1493 inset;
    }

    30% {
      box-shadow: 0 0 23px #ff1493, 0 0 23px #ff1493 inset;
    }

    35% {
      box-shadow: 0 0 18px #ff1493, 0 0 18px #ff1493 inset;
    }

    40% {
      box-shadow: 0 0 20px #ff1493, 0 0 20px #ff1493 inset;
    }

    45% {
      box-shadow: 0 0 19px #ff1493, 0 0 19px #ff1493 inset;
    }

    50% {
      box-shadow: 0 0 14px #ff1493, 0 0 14px #ff1493 inset;
    }

    55% {
      box-shadow: 0 0 17px #ff1493, 0 0 17px #ff1493 inset;
    }

    60% {
      box-shadow: 0 0 20px #ff1493, 0 0 20px #ff1493 inset;
    }

    65% {
      box-shadow: 0 0 24px #ff1493, 0 0 24px #ff1493 inset;
    }

    70% {
      box-shadow: 0 0 21px #ff1493, 0 0 21px #ff1493 inset;
    }

    75% {
      box-shadow: 0 0 19px #ff1493, 0 0 19px #ff1493 inset;
    }

    80% {
      box-shadow: 0 0 19px #ff1493, 0 0 19px #ff1493 inset;
    }

    85% {
      box-shadow: 0 0 14px #ff1493, 0 0 14px #ff1493 inset;
    }

    90% {
      box-shadow: 0 0 19px #ff1493, 0 0 19px #ff1493 inset;
    }

    95% {
      box-shadow: 0 0 20px #ff1493, 0 0 20px #ff1493 inset;
    }

    to {
      box-shadow: 0 0 19px #ff1493, 0 0 19px #ff1493 inset;
    }
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 32px;
  }
  img {
    z-index: 1;
    width: 105%;
    height: 100%;
  }
`

const Author = styled(Link)`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  text-decoration: none;
  width: 100%;
  color: #ffb3de;
`

const AuthorTitle = styled(Link)`
  width: 100%;
  flex-basis: 100%
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  margin-top: 4px;
  margin-bottom: 16px;
  color: #ffb3de;
`

const Bio = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 16px;
  color: #ffb3de;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
const Vector = styled(Link)`
  width: 32px;
  margin-right: 8px;
`

const Info = styled.div`
  margin-left: 45px;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`

function AuthorCard({ posts, author, bio }) {
  console.log("text", posts.document.data.linkedin)
  let linked = posts.document.data.linkedin
  console.log(typeof linked)
  return (
    <Article>
      <Picture
        image={getImage(posts.document.data.image)}
        alt="thumbnailA"
      ></Picture>

      <Info>
        <Author to={`/blog/${posts.document.data.name}`}>{author}</Author>

        <AuthorTitle>{posts.document.data.title}</AuthorTitle>

        {bio && <Bio>{posts.document.data.shortbio.text} </Bio>}

        <Row>
          {posts.document.data.linkedin && (
            <Vector to={posts.document.data.linkedin}>
              <Linkedin />
            </Vector>
          )}

          {posts.document.data.twitter && (
            <Vector to={posts.document.data.twitter}>
              <Twitter />
            </Vector>
          )}
          {posts.document.data.facebook && (
            <Vector to={posts.document.data.facebook}>
              <Facebook />
            </Vector>
          )}
        </Row>
      </Info>
    </Article>
  )
}

export default AuthorCard
