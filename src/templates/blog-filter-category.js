import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { useEffect } from "react"
import { useState } from "react"
import BlogCard from "../components/blog/blogCard"
import PageNumber from "../components/blog/pageNumber"
import { Breadcrumbs } from "../components/blog/breadcrumbs"
import Seo from "../components/global_elements/seo"
import HeroBlog from "../components/blog/hero"
import Navbar from "../components/blog/navbar"
import Layout from "../components/global_elements/layout"

const BlogList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-family: Work Sans;
  background: none;

  a {
    text-decoration: none;
    cursor: pointer;
  }
  .row {
    display: flex;
    flex-direction: row;
    /* align-content: center; */
    align-items: center;
    justify-content: space-between;
    margin: 16px 0;
    width: 100%;
    max-width: 1028px;
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
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 5% 5%;
  padding: 0 5%;
`

export default function Blog({ data, pageContext, location }) {
  const posts = data.allPrismicPost.nodes
  const [checklocation, setCheckLocation] = useState("/")
  const [page, setPage] = useState(1)
  let blogNumber = 0

  useEffect(() => {
    let params = new URLSearchParams(document.location.search)
    let page = params.get("page") // is the string "Jonathan"
    console.log("Page: " + page)
    if (page) setPage(page)
  }, [])
  useEffect(() => {
    setCheckLocation(window.location.pathname)
  }, [])

  return (
    <Layout>
      <BlogList>
        <Seo title={pageContext.category} />
        <HeroBlog />
        <Navbar categories={pageContext.categoryTypes} />
        <div className="resize">
          <Breadcrumbs
            currentPath={["/"].concat(
              location.pathname.split("/").filter(name => name !== "")
            )}
          />
          <ArticleContainer>
            {posts.map((post, i) => {
              blogNumber = i

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
            location={checklocation}
            blogNumber={blogNumber}
            setPage={setPage}
            page={page}
          />
        </div>
      </BlogList>
    </Layout>
  )
}

export const query = graphql`
  query BlogCategoryQuery($category: String!) {
    allPrismicPost(filter: { data: { category: { eq: $category } } }) {
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
