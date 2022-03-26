/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "../layout.css"

const Main = styled.main`
  /* background: linear-gradient(to right bottom, #3616ac, #e09bed); */
  font-family: "Nexa";
  src: local("Nexa"),
    url(../fonts/Nexa/TTF/Nexa-Trial-Regular.ttf) format("truetype");
  font-display: swap;
`

const Div = styled.div`
  /* background: linear-gradient(to right bottom, #3616ac, #e09bed); */
`
const Bg = styled.div`
  background: linear-gradient(to right bottom, #3616ac, #e09bed);
  height: 100%;
  background-color: #141114;
  background-image: linear-gradient(335deg, black 23px, transparent 23px),
    linear-gradient(155deg, black 23px, transparent 23px),
    linear-gradient(335deg, black 23px, transparent 23px),
    linear-gradient(155deg, black 23px, transparent 23px);
  background-size: 58px 58px;
  background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Bg>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Div>
        <Main>{children}</Main>
        {/* <footer
          style={{
            marginTop: `2rem`,
            background: `none`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </Div>
    </Bg>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
