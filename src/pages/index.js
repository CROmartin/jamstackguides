import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import BlogCard from "../components/blog/blogCard"
import PageNumber from "../components/blog/pageNumber"
import Seo from "../components/global_elements/seo"
import HeroBlog from "../components/blog/hero"
import Navbar from "../components/blog/navbar"
import Layout from "../components/global_elements/layout"

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Work Sans;
  font-feature-settings: "kern", "liga", "clig", "calt";
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  background: none;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .resize {
    width: 100%;
    max-width: 1280px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

const ArticleContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 5% 5%;
  margin-top: 5%;
  padding: 0 5%;
  background: none;
`

export default function IndexPage({ data, pageContext }) {
  const [page, setPage] = useState(1)
  let blogNumber = 0
  let categoryType = []

  useEffect(() => {
    let params = new URLSearchParams(document.location.search)
    let page = params.get("page")
    if (page) setPage(page)
  }, [])

  return (
    <Layout>
      <BlogList>
        <Seo title={"Blog"} />
        <HeroBlog />
        <Navbar categories={categoryType} />
        <div className="resize">
          <ArticleContainer>
            {data.allPrismicPost.nodes.map((post, i) => {
              blogNumber = i
              if (!categoryType.includes(post.data.category))
                categoryType.push(post.data.category)
              return (
                <BlogCard
                  post={post}
                  author={post.data.author.document.data.name}
                  visible={
                    i <= 8 * (page - 1) - 1 || i > 8 * page - 1
                      ? "none"
                      : "flex"
                  }
                />
              )
            })}
          </ArticleContainer>
          <PageNumber
            location="/blog"
            blogNumber={blogNumber}
            setPage={setPage}
            page={page}
          />
        </div>
      </BlogList>
    </Layout>
  )
}
//https://momentjs.com/docs/#/displaying/format/
export const pageQueryIndex = graphql`
  query MyQuery {
    allPrismicPost {
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
