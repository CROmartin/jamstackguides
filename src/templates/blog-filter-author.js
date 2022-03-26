import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { useEffect } from "react"
import { useState } from "react"
import BlogCard from "../components/blog/blogCard"
import AuthorCard from "../components/blog/authorCard"
import PageNumber from "../components/blog/pageNumber"
import { Breadcrumbs } from "../components/blog/breadcrumbs"
import Seo from "../components/global_elements/seo"
import HeroBlog from "../components/blog/hero"
import Navbar from "../components/blog/navbar"
import Layout from "../components/global_elements/layout"

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #141114;
  background-image: linear-gradient(335deg, black 23px, transparent 23px),
    linear-gradient(155deg, black 23px, transparent 23px),
    linear-gradient(335deg, black 23px, transparent 23px),
    linear-gradient(155deg, black 23px, transparent 23px);
  background-size: 58px 58px;
  background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .resize {
    width: 100%;
    max-width: 1280px;

    background-color: #141114;
    background-image: linear-gradient(335deg, black 23px, transparent 23px),
      linear-gradient(155deg, black 23px, transparent 23px),
      linear-gradient(335deg, black 23px, transparent 23px),
      linear-gradient(155deg, black 23px, transparent 23px);
    background-size: 58px 58px;
    background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
  }
`

const ArticleContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 5% 5%;
  padding: 0 5%;
`

export default function Blog({ data, location, pageContext }) {
  const posts = data.allPrismicPost.nodes
  console.log("test", posts[0])
  console.log(posts)
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
        <Seo title={posts[0].data.author.document.data.name} />
        <HeroBlog />
        <Navbar categories={pageContext.categoryTypes} />
        <Breadcrumbs
          currentPath={["/"].concat(
            location.pathname.split("/").filter(name => name !== "")
          )}
        />
        <div className="resize">
          <AuthorCard
            posts={posts[0].data.author}
            author={posts[0].data.author.document.data.name}
            bio={true}
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
            {/* </div> */}
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
  query BlogFilterQuery($id: ID!) {
    allPrismicPost(filter: { data: { author: { id: { eq: $id } } } }) {
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
                  image {
                    gatsbyImageData
                  }
                  shortbio {
                    text
                  }
                  title
                  twitter
                  linkedin
                  facebook
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
