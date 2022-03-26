import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"

const ArticleTitles = styled(Link)`
  font-family: "Nexa";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 32px;
  text-align: left;
  width: 100%;
  color: #ffb3de;
  padding: 8%;
  padding-bottom: 5%;
  padding-top: 0;
  height: 120px;
`

const Article = styled.article`
  flex-grow: 1;
  flex-basis: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  border: 3px solid #ffb3de;
  border-radius: 8px;
  background: rgba(255, 179, 222, 0.5);
  background: black;

  box-shadow: 0 0 20px #ff1493, 0 0 20px #ff1493 inset;
  animation: flickerB 3s linear infinite;

  @keyframes flickerB {
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
  border-radius: 8px;
  max-width: 582px;

  @media (max-width: 720px) {
    flex-basis: 100%;
  }
`

const Button = styled.button`
  align-self: flex-start;
  border: none;

  ${props => (props.color ? `background: none;` : `background: #007de6;`)};
  ${props => (props.color ? `border-radius: 24px;` : `border-radius: 4px;`)};
  ${props => (props.color ? `border: 4px solid ${props.color};` : ``)};

  ${props =>
    `box-shadow: 0 0 19px ${props.color}, 0 0 19px ${props.color} inset;`}

  font-family: "Nexa";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 16px;
  color: #ffffff;
  text-shadow: 0px 0px 200px white;

  transition: background-color 2s;
  a {
    font-family: "Nexa";
    font-weight: 500;
    margin: 16px;
    text-shadow: 0px 0px 20px black, 0px 0px 20px black !important;
  }

  :hover {
    ${props => `background-color: ${props.color}80;`}
    cursor: pointer;
  }
  .link {
    color: White;
    font-weight: 500;
    font-size: 18px;
  }

  /* animation: buttonFlicker 6s linear infinite; */

  @keyframes buttonFlicker {
    from {
      ${props =>
        `box-shadow: 0 0 20px ${props.color}, 0 0 20px ${props.color} inset;`}
    }

    5% {
      ${props =>
        `box-shadow: 0 0 18px ${props.color}, 0 0 18px ${props.color} inset;`}
    }

    10% {
      ${props =>
        `box-shadow: 0 0 19px ${props.color}, 0 0 19px ${props.color} inset;`}
    }

    15% {
      ${props =>
        `box-shadow: 0 0 22px ${props.color}, 0 0 22px ${props.color} inset;`}
    }

    20% {
      ${props =>
        `box-shadow: 0 0 19px ${props.color}, 0 0 19px ${props.color} inset;`}
    }

    25% {
      ${props =>
        `box-shadow: 0 0 18px ${props.color}, 0 0 18px ${props.color} inset;`}
    }

    30% {
      ${props =>
        `box-shadow: 0 0 23px ${props.color}, 0 0 23px ${props.color} inset;`}
    }

    35% {
      ${props =>
        `box-shadow: 0 0 18px ${props.color}, 0 0 18px ${props.color} inset;`}
    }

    40% {
      ${props =>
        `box-shadow: 0 0 20px ${props.color}, 0 0 20px ${props.color} inset;`}
    }

    45% {
      ${props =>
        `box-shadow: 0 0 19px ${props.color}, 0 0 19px ${props.color} inset;`}
    }

    50% {
      ${props =>
        `box-shadow: 0 0 14px ${props.color}, 0 0 14px ${props.color} inset;`}
    }

    55% {
      ${props =>
        `box-shadow: 0 0 17px ${props.color}, 0 0 17px ${props.color} inset;`}
    }

    60% {
      ${props =>
        `box-shadow: 0 0 20px ${props.color}, 0 0 20px ${props.color} inset;`}
    }

    65% {
      ${props =>
        `box-shadow: 0 0 24px ${props.color}, 0 0 24px ${props.color} inset;`}
    }

    70% {
      ${props =>
        `box-shadow: 0 0 21px ${props.color}, 0 0 21px ${props.color} inset;`}
    }

    75% {
      ${props =>
        `box-shadow: 0 0 19px ${props.color}, 0 0 19px ${props.color} inset;`}
    }

    80% {
      ${props =>
        `box-shadow: 0 0 19px ${props.color}, 0 0 19px ${props.color} inset;`}
    }

    85% {
      ${props =>
        `box-shadow: 0 0 14px ${props.color}, 0 0 14px ${props.color} inset;`}
    }

    90% {
      ${props =>
        `box-shadow: 0 0 19px ${props.color}, 0 0 19px ${props.color} inset;`}
    }

    95% {
      ${props =>
        `box-shadow: 0 0 20px ${props.color}, 0 0 20px ${props.color} inset;`}
    }

    to {
      ${props =>
        `box-shadow: 0 0 19px ${props.color}, 0 0 19px ${props.color} inset;`}
    }
  }
`

const Date = styled.div`
  font-family: "Nexa";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 27px;
  /* identical to box height, or 193% */

  text-transform: uppercase;

  /* Gray 3 */

  color: #ffb3de;
`

const RowSpaceBtw = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 8%;
  padding-top: 5%;
  padding-bottom: 5%;
`

const ReadTime = styled.div`
  font-family: "Nexa";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
  text-align: right;
  text-transform: uppercase;
  color: #ffb3de;
`
const Image = styled(GatsbyImage)`
  /* max-height: 200px; */
  width: 100%;
  height: 100%;
`
const ImageFramer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 363px;
  /* background-blend-mode: multiply, normal; */
  background: white;
  /* background: #f2f2f2; */
  border-radius: 6px 6px 0px 0px;
  border-bottom: 3px solid #ffb3de;

  /* border-bottom: none; */
  overflow: hidden;
`

const Desc = styled.p`
  min-height: 110px;
  width: 100%;
  font-family: "Nexa";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #ffb3de;
  padding: 0 8%;
  margin: 0;
  height: 200px;
`

const Author = styled(Link)`
  font-family: "Nexa";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 27px;
  color: #ffb3de;
`
function BlogCard({ post, author, visible }) {
  function filterCategoryName(name) {
    name = name.replaceAll("-", " ")
    return name
  }
  return (
    <Article style={{ display: visible }}>
      {" "}
      <ImageFramer>
        <Image image={getImage(post.data.thumbnail)} alt="thumbnail" />
      </ImageFramer>
      <RowSpaceBtw>
        <Button
          color={post.data.category_color}
          style={
            {
              /*backgroundColor: post.data.category_color*/
            }
          }
        >
          <Link className="link" to={`/${post.data.category}`}>
            {filterCategoryName(
              post.data.category.charAt(0).toUpperCase() +
                post.data.category.slice(1)
            )}
          </Link>
        </Button>
        <ReadTime>{post.data.read_time}</ReadTime>
      </RowSpaceBtw>{" "}
      <ArticleTitles to={`${post.data.url ? post.data.url : post.uid}`}>
        {post.data.title}
      </ArticleTitles>
      <Desc>{post.data.description}</Desc>
      <RowSpaceBtw>
        <Author to={`/${post.data.author.document.data.name}?pick=-1`}>
          by <b>{post.data.author.document.data.name}</b>
        </Author>
        <Date> {post.data.publish_date}</Date>
      </RowSpaceBtw>
    </Article>
  )
}

export default BlogCard
