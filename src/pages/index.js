import React from "react"
import BackgroundImage from "gatsby-background-image"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage
      className= "frontBanner"
      fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div
        className="blackOverlay"
      >
        <h1 className="bannerText">Hi, Welcome!</h1>
        <h1 className="bannerText">My name is Juan Pablo</h1>
      </div>
    </BackgroundImage>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: {eq: "MainPhoto.JPG"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;