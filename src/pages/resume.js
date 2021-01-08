import React from "react"

import Layout from "../components/layout"
import ResumeSection from "../components/resumesection"
import ResumeItem from "../components/resumeitem"

import SEO from "../components/seo"

import styled from "@emotion/styled"
import {Divider} from "antd"

const Container = styled("div")`
  margin: 0px 60px;
  padding: 30px 60px;
  background: white;
  border-radius: 20px;
  border-color: rgba(0,0,0,0.1);
  border-style: solid;
  border-width: 2px;
`;

const Title =styled("h1")`
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 2.5rem;
`;


const Resume = (props) => (
  <Layout>
    <SEO title="Resume" />
    <Container>
      <Title>Juan Pablo Castano</Title>
      <Divider/>
      <ResumeSection title={"Education"}/>
      <ResumeItem image={props.data.uofr.childImageSharp.fluid} org={education.uofr}/>
      <Divider/>
      <ResumeSection title={"Experience"}></ResumeSection>
      <ResumeItem image={props.data.codeclimate.childImageSharp.fluid} org={resumeJobs.codeclimate}></ResumeItem>
      <ResumeItem image={props.data.geometrica.childImageSharp.fluid} org={resumeJobs.geometrica}></ResumeItem>
      <ResumeItem image={props.data.uofr.childImageSharp.fluid} org={resumeJobs.uofr}></ResumeItem>
      <Divider/>
    </Container>
  </Layout>
)

export default Resume

export const pageQuery = graphql`
  query {
    uofr: file(relativePath: {eq: "uofr.png"}) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    codeclimate: file(relativePath: {eq: "codeclimate.png"}) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    geometrica: file(relativePath: {eq: "geometrica.png"}) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`;

let resumeJobs = {
  codeclimate: {
    name: "Code Climate",
    location: "New York, NY",
    date: "Sept. 2018 - Oct. 2020",
    description: "Code Climate’s flagship product, Velocity, analyzes all the data from your GitHub repos and provides you with heads-up displays, real-time analytics, and custom reports to give you a clearer perspective on how your engineering team is working."
  },
  geometrica: {
    name: "Geometrica Inc",
    location: "Monterrey, Mexico",
    date: "June 2017 - Aug. 2017",
    description: "Geometrica has designed, manufactured and installed domes and space frames since 1992. The company has developed unique technology to build amazing, long span structures for architectural and industrial buildings. With offices in Houston, Texas and Monterrey, Mexico, and a global network of representatives, Geometrica has delivered domes and space frames in more than 40 countries in North and South America, Europe, Asia and Africa."
  },
  uofr: {
    name: "University of Rochester",
    location: "Rochester, NY",
    date: "Aug. 2015 - May 2018",
    description: "The University of Rochester (UR) is a private, nonsectarian, research-intensive university located in Rochester, New York. The University grants bachelor's, masters, and doctoral degrees through seven schools and various interdisciplinary programs.The University enrolls over 6,000 undergraduates and nearly 5,000 graduate students, and competes in the NCAA's Division III for athletics. The University with its affiliated UR Medicine health system is the largest employer in the Greater Rochester area."
  },
}

let education = {
  uofr: {
    name: "University of Rochester",
    location: "Rochester, NY",
    date: "Aug. 2014 - May 2018"
  }
}