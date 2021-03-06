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
    <Banner img={props.data.binary} text={"What I Can Do"} size="small"></Banner>
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
        name: "SQL",
        level: 0.5
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
        name: "Gatsby",
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
      }
    ]
  },
  communication: {
    title: "Soft Skills",
    skills: [
      {
        name: "Technical Presentations",
        level: 0.7
      },
      {
        name: "Product Demonstrations",
        level: 0.7
      },
      {
        name: "Public Speaking",
        level: 0.9
      },
      {
        name: "Team Collaboration",
        level: 0.99
      },
      {
        name: "Documentation",
        level: 0.5
      },
      {
        name: "Coaching",
        level: 0.6
      }
    ]
  },
  foundations: {
    title: "Foundations",
    skills: [
      {
        name: "Object-Oriented Programming",
        level: 0.7
      },
      {
        name: "Front End Development",
        level: 0.7
      },
      {
        name: "Full-Stack Web Development",
        level: 0.4
      },
      {
        name: "Continuous Deployment",
        level: 0.5
      },
      {
        name: "Data Structures",
        level: 0.9
      },
      {
        name: "Algorithms",
        level: 0.9
      }
    ]
  },
  languages: {
    title: "Languages",
    skills: [
      {
        name: "Spanish",
        level: 0.99
      },
      {
        name: "English",
        level: 0.99
      }
    ]
  }
}