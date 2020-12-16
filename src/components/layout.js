/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"


import Header from "./header"
import Footer from "./footer"
import "./style/layout.css"
import "./style/custom.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
      background: file(relativePath: {eq: "backgroundimage.png"}) {
        childImageSharp {
          fluid(maxHeight: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      } 
    }
  `)

  return (
    <BackgroundImage
        fluid={data.background.childImageSharp.fluid}
        className="flexThisBox"
      >
      <Header menuLinks={data.site.siteMetadata.menuLinks} 
            siteTitle={data.site.siteMetadata?.title || `Title`} 
            className="shadow"/>
      <main>{children}</main>
      <Footer/>
    </BackgroundImage>
      
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout