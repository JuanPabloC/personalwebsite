import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexCard from "../components/indexcard"
import Banner from "../components/banner"

const aboutmetext = [
  `Spanish & English Bilingual | Mexican | Looking for a new role!`,
  `I’m an energetic and motivated fast-learner currently looking to
  return to software development after two years of customer-facing
  roles in the engineering intelligence industry.`,
  `Passionate about improving team culture,
  tackling new challenges, mentoring and contributing to
  tools/teams that have a positive impacting our society.`
];

const IndexPage = (props) => {

  return (
    <Layout>
      <SEO title="Home" />
      <Banner img={props.data.indexImage} text={"Hi, Welcome! My name is Juan Pablo"} size="large"></Banner>
      <IndexCard img={props.data.firstCardImg.childImageSharp.fluid} text={aboutmetext} title="About Me" imgPosition="left"/>
      {/* <IndexCard img={props.data.firstCardImg.childImageSharp.fluid} text={aboutmetext} title="Values" imgPosition="right"/>
      <IndexCard img={props.data.firstCardImg.childImageSharp.fluid} text={aboutmetext} title="What Now" imgPosition="left"/> */}
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
    },
    firstCardImg: file(relativePath: {eq: "nycskyline.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;