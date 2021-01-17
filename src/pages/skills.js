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
      <Skillsbox skills={skills}></Skillsbox>
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

let skills = {
  software: {
    title: "Programming",
    skills: [
      {
        name: "Javascript",
        level: 0.7
      },
      {
        name: "Java",
        level: 0.7
      },
      {
        name: "HTML",
        level: 0.8,
      },
      {
        name: "CSS",
        level: 0.6
      },
      {
        name: "Swift",
        level: 0.1
      }
    ]
  },
  frameworks: {
    title: "Frameworks and Tools",
    skills: [
      {
        name: "React",
        level: 0.6
      },
      {
        name: "Node.js",
        level: 0.4
      },
      {
        name: "Express",
        level: 0.2
      },
      {
        name: "RESTful APIs",
        level: 0.4
      },
      {
        name: "Git",
        level: 0.8
      },
      {
        name: "GitHub",
        level: 0.8
      },
      {
        name: "JIRA",
        level: 0.3
      }
    ]
  },
  communication: {
    title: "Soft Skills",
    skills: [

    ]
  },
  languages: {
    title: "Languages",
    skills: [
      {
        name: "Spanish",
        level: 1
      },
      {
        name: "English",
        level: 1
      }
    ]
  }
}