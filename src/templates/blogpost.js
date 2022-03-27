import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Seo from "../components/global_elements/seo"
import AuthorCard from "../components/blog/authorCard"
import { Breadcrumbs } from "../components/blog/breadcrumbs"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import BlogCard from "../components/blog/blogCard"
import NeonWord from "../components/global_elements/neonWord"

const Blog = styled.div`
  display: flex;
  flex-direction: column;
  color: #111111;
  font-family: Work Sans;
  font-style: normal;
  background: #fbfbfb;
  border-bottom: 1px solid #e1e1e1;

  h1 {
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .vector {
    width: 100px;
  }

  .body {
    a {
      cursor: pointer;
      color: #0645ad;
      :hover {
        text-decoration: underline;
      }
    }
  }
`
const Div = styled.div`
  text-align: left;
  margin: auto;
  width: 80%;
  transition: width 1s;
  @media (max-width: 980px) {
    width: 90%;
  }
  @media (max-width: 375px) {
    width: 92%;
  }

  /* p {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  } */
`

const Overflow = styled.div`
  overflow: hidden;
`
const DivRelated = styled.div`
  text-align: left;
  margin: auto;
  width: 100%;
`

const Hero = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  padding: 1%;
  img {
    width: 70%;
    max-height: 480px;
    max-width: 450px;
    height: auto;
    margin: auto;
  }
`

const Bg = styled.div`
  background: linear-gradient(to right bottom, #3616ac, #e09bed);
  height: 100%;
  width: 110vw;
  transform: translate(-5vw, 0);
  background-color: #141114;
  background-image: linear-gradient(335deg, black 23px, transparent 23px),
    linear-gradient(155deg, black 23px, transparent 23px),
    linear-gradient(335deg, black 23px, transparent 23px),
    linear-gradient(155deg, black 23px, transparent 23px);
  background-size: 58px 58px;
  background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
  padding-top: 50px;
  border-top: 3px solid #ffb3de;
  animation: flickerBlogBottom 3s linear infinite;

  @keyframes flickerBlogBottom {
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
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  gap: 5% 5%;

  a {
    text-decoration: none;
  }
  /* align-items: center;
  justify-content: center; */
`

const RelatedBlogPosts = styled.div`
  /* font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 46px;
  text-align: center;
  color: #111111; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`

const Related = styled.div`
  background: none;
  border-top: 3px solid #ffb3de;
  width: 110vw;
  /* transform: translate(-5vw, 0); */

  animation: flickerRelated 3s linear infinite;

  @keyframes flickerRelated {
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
`

export default function BlogPost({ data, location, pageContext }) {
  console.log(data)
  let { post } = data
  let { prev } = data
  let { next } = data
  let { related1 } = data
  let { related2 } = data

  console.log(post.nodes[0].data)
  post = post.nodes[0].data
  prev = prev.nodes[0]
  next = next.nodes[0]
  related1 = related1.nodes[0]
  related2 = related2.nodes[0]
  console.log("related", related1)
  let neonSize = "32px"

  return (
    <Overflow>
      <Blog>
        <Seo
          title={post.title}
          schemaMarkup={post.schema}
          description={post.description}
        />

        <Div>
          <Breadcrumbs
            currentPath={["/"].concat(
              location.pathname.split("/").filter(name => name !== "")
            )}
            customUrl={post.title}
          />
        </Div>
        <Div>
          <Hero image={getImage(post.hero)} alt={"hero"} />

          <Div
            className="body"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
        </Div>
      </Blog>
      <Bg>
        <AuthorCard
          posts={post.author}
          author={post.author.document.data.name}
          bio={true}
        />

        <Related>
          <RelatedBlogPosts>
            {" "}
            <NeonWord normal2="Related" size={neonSize} />{" "}
            <NeonWord normal1="Blog" size={neonSize} margin={neonSize} />{" "}
            <NeonWord normal1="Posts" size={neonSize} margin={neonSize} />{" "}
          </RelatedBlogPosts>

          <DivRelated>
            <Flex>
              {prev && !related1 && (
                <BlogCard
                  post={prev}
                  author={prev.data.author.document.data.name}
                  visible={"flex"}
                />
              )}
              {next && !related2 && (
                <BlogCard
                  post={next}
                  author={next.data.author.document.data.name}
                  visible={"flex"}
                />
              )}
              {related1 && (
                <BlogCard
                  post={related1}
                  author={related1.data.author.document.data.name}
                  visible={"flex"}
                />
              )}
              {related2 && (
                <BlogCard
                  post={related2}
                  author={related2.data.author.document.data.name}
                  visible={"flex"}
                />
              )}
            </Flex>
          </DivRelated>
        </Related>
      </Bg>
    </Overflow>
  )
}
export const query = graphql`
  query BlogQuery(
    $uid: String!
    $prev: String!
    $next: String!
    $related1: String!
    $related2: String!
  ) {
    post: allPrismicPost(filter: { uid: { eq: $uid } }) {
      nodes {
        data {
          body {
            html
          }
          schema
          title
          description
          author {
            document {
              ... on PrismicAuthor {
                id
                data {
                  facebook
                  image {
                    gatsbyImageData
                  }
                  linkedin
                  name
                  title
                  twitter
                  shortbio {
                    text
                  }
                }
              }
            }
          }
          hero {
            gatsbyImageData
          }
          title
        }
        uid
      }
    }

    prev: allPrismicPost(filter: { uid: { eq: $prev } }) {
      nodes {
        data {
          url
          title
          thumbnail {
            gatsbyImageData
          }
          read_time
          publish_date(formatString: "MMMM D, Y")
          category
          category_color
          description
          featured
          author {
            document {
              ... on PrismicAuthor {
                id
                data {
                  name
                }
              }
            }
          }
        }
        uid
      }
    }

    next: allPrismicPost(filter: { uid: { eq: $next } }) {
      nodes {
        data {
          url
          title
          thumbnail {
            gatsbyImageData
          }
          read_time
          publish_date(formatString: "MMMM D, Y")
          category
          category_color
          description
          featured
          author {
            document {
              ... on PrismicAuthor {
                id
                data {
                  name
                }
              }
            }
          }
        }
        uid
      }
    }

    related1: allPrismicPost(filter: { uid: { eq: $related1 } }) {
      nodes {
        data {
          url
          title
          thumbnail {
            gatsbyImageData
          }
          read_time
          publish_date(formatString: "MMMM D, Y")
          category
          category_color
          description
          featured
          author {
            document {
              ... on PrismicAuthor {
                id
                data {
                  name
                }
              }
            }
          }
        }
        uid
      }
    }

    related2: allPrismicPost(filter: { uid: { eq: $related2 } }) {
      nodes {
        data {
          url
          title
          thumbnail {
            gatsbyImageData
          }
          read_time
          publish_date(formatString: "MMMM D, Y")
          category
          category_color
          description
          featured
          author {
            document {
              ... on PrismicAuthor {
                id
                data {
                  name
                }
              }
            }
          }
        }
        uid
      }
    }
  }
`
