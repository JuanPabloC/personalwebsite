import React from "react"

import { graphql } from 'gatsby'
import Layout from "../components/layout"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Skillsbox from "../components/skillsbox"
import Banner from "../components/banner"


const Wrapper = styled("div")`
  margin: 20px 60px 0px 60px; 
  padding: 30px 60px; 
  background: white;
  border-color: rgba(0,0,0,0.1);
  border-style: solid;
  border-width: 2px;
  border-radius: 20px;
`;

const Skills = (props) => (
  <Layout>
    <SEO title="Skills" />
    <Banner img={props.data.binary} text={"My Skills"} size="small"></Banner>
    <Wrapper>
      <Skillsbox></Skillsbox>
    </Wrapper>
  </Layout>
)

export default Skills

export const pageQuery = graphql`
  query {
    binary: file(relativePath: {eq: "binary.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;