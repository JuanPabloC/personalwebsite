import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Skillsbox from "../components/skillsbox"

const Wrapper = styled("div")`
  margin: 0px 60px;
  padding: 30px 60px; 
  background: white;
  border-color: rgba(0,0,0,0.1);
  border-style: solid;
  border-width: 2px;
  border-radius: 20px;
`;

const Skills = () => (
  <Layout>
    <SEO title="Skills" />
    <Wrapper>
      <Skillsbox></Skillsbox>
    </Wrapper>
  </Layout>
)

export default Skills
