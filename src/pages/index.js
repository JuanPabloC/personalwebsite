import React from "react"
import styled from "@emotion/styled"
// import { css } from "@emotion/react"
import BackgroundImage from "gatsby-background-image"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BannerHeading = styled("h1")`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 3.5rem;
`;

const BlackOverlay = styled("div")`
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: left;
  padding: 15vh;
`;

const IndexPage = (props) => {

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        fluid={props.data.indexImage.childImageSharp.fluid}
      >
        <BlackOverlay>
          <BannerHeading>Hi, Welcome!</BannerHeading>
          <BannerHeading>My name is Juan Pablo</BannerHeading>
        </BlackOverlay>
      </BackgroundImage>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: {eq: "MainPhoto.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;