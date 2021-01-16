import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ResumeSection from "../components/resumesection"
import ResumeItem from "../components/resumeitem"
import ResumeEducationItem from "../components/resumeeducationitem"
import Banner from "../components/banner"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Container = styled("div")`
  margin: 20px 60px 0px 60px;
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

const RoundDivider=styled("hr")`
  border-top: 3px solid #bbb;
  border-radius: 5px;
`;

const DashedDiver=styled("hr")`
  border-top: 1px dashed #bbb;
`;

const Resume = (props) => (
  <Layout>
    <SEO title="Resume" />
    <Banner img={props.data.manhattan} text="My Resume" size="small"></Banner>
    <Container>
      <Title>Juan Pablo Castano</Title>
      <RoundDivider/>
      <ResumeSection title={"Education"}/>
      <ResumeEducationItem image={props.data.uofr.childImageSharp.fluid} org={education.uofr}/>
      <RoundDivider/>
      <ResumeSection title={"Experience"}></ResumeSection>
      <ResumeItem image={props.data.codeclimate.childImageSharp.fluid} org={resumeJobs.codeclimate}></ResumeItem>
      <DashedDiver/>
      <ResumeItem image={props.data.geometrica.childImageSharp.fluid} org={resumeJobs.geometrica}></ResumeItem>
      <DashedDiver/>
      <ResumeItem image={props.data.uofr.childImageSharp.fluid} org={resumeJobs.uofr}></ResumeItem>
      <DashedDiver/>
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
    manhattan: file(relativePath: {eq: "manhattan.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

let resumeJobs = {
  codeclimate: {
    name: "Code Climate",
    url: "https://codeclimate.com/",
    location: "New York, NY",
    date: "Sept. 2018 - Oct. 2020",
    description: "Code Climate’s flagship product, Velocity, analyzes all the data from your GitHub repos and provides you with heads-up displays, real-time analytics, and custom reports to give you a clearer perspective on how your engineering team is working. \n\nNo more tedious hours scouring Github, scanning JIRA tickets, or pinging developers. With instant access to your team’s progress, blockers, and reports, you always have everything you need to make confident, data-informed decisions. Spend less time surfacing issues, and more time solving them.",
    roles: [
      {
        title: "Outbound Business Development Representative",
        responsibilities: [
          "Founding member of Code Climate's first account-based Outbound Business Development Team",
          "Prioritized multiple projects simultaneously and worked under strict deadlines to ensure the success of the team.",
          "Created and executed strategic, multi-channel, cold lead-generation campaigns.",
          "Communicated the value of Code Climate's complex engineering analytics solution to engineering executives and managers while objection-handling.",
          "Conducted 250 weekly cold calls and 600 total outreach steps with Engineering Leaders to generate interest and book next steps.",
          "Organized and participated in various social events and initiatives to boost morale and maintain a positive cultural start-up experience."
        ]
      },
      {
        title: "Associate Account Executive",
        responsibilities: [
          "Promoted within a year to run the full sales cycle, from lead qualification to close, of Code Climate's complex SaaS solution in the SMB sector.",
          "Closed $166K in ARR over the course of 2 quarters as the fourth AE at Code Climate while helping refine the sales process for an early-stage SaaS product.",
          "Documented all interactions with customers using Salesforce and Gong.io to ensure a positive customer experience and transition into partnership.",
          "Presented product demos, matched problem statements to solutions, and oversaw technical compatibility between the prospects' and our tools.",
          "Coached engineering executives on how to leverage engineering intelligence to improve their software development performance.",
          "Operated in-person product demo booths and managed lead-generation at 4 engineering conferences, including LeadDev, QCon and GitHub Universe."
        ]
      },
      {
        title: "Sales Development Representative",
        responsibilities: [
          "Owned the processing and qualification of inbound leads, from initial contact to Account Executive hand-off.",
          "Established the first cold outbound framework, including the implementation of sales enablement & video outreach tooling, documentation of processes and reporting.",
          "Assisted with planning and execution for Code Climate’s 2019 Engineering Leadership Summit, including the filling and management of sponsorships.",
          "Participated in hiring efforts and mentored new SDRs, offering product, prospecting, outreach, and general coaching.",
          "Documented processes and resources to help with SDR on-boarding experience."
        ]
      }
    ]
  },
  geometrica: {
    name: "Geometrica Inc",
    url: "https://www.geometrica.com/",
    location: "Monterrey, Mexico",
    date: "June 2017 - Aug. 2017",
    description: "Geometrica has designed, manufactured and installed domes and space frames since 1992. The company has developed unique technology to build amazing, long span structures for architectural and industrial buildings. With offices in Houston, Texas and Monterrey, Mexico, and a global network of representatives, Geometrica has delivered domes and space frames in more than 40 countries in North and South America, Europe, Asia and Africa.",
    roles: [
      {
        title: "Software Engineering Intern",
        responsibilities: [
          "Developed front-end and back-end of new web application for employee information management that improved efficiency for Human Resources processes. Application will be able to save hours of labor for 100+ engineers and administrators.",
          "Responsible for the full process of the application development and the constant user-developer communication.",
          "Extensive usage of technologies including REST APIs, HTML, CSS, Javascript (including frameworks), PostgreSQL, wireframe tools and version-control systems."
        ]
      }
    ]
  },
  uofr: {
    name: "University of Rochester",
    url: "https://www.rochester.edu/",
    location: "Rochester, NY",
    date: "Aug. 2015 - May 2018",
    description: "The University of Rochester (UR) is a private, nonsectarian, research-intensive university located in Rochester, New York. The University grants bachelor's, masters, and doctoral degrees through seven schools and various interdisciplinary programs.The University enrolls over 6,000 undergraduates and nearly 5,000 graduate students, and competes in the NCAA's Division III for athletics. The University with its affiliated UR Medicine health system is the largest employer in the Greater Rochester area.",
    roles: [
      {
        title: "Peer Advisor - Computer Science Department",
        responsibilities: [
          "Help students declare majors and make connections with faculty, review research opportunities, and explore study abroad and options for independent and interdisciplinary study.",
          "Held weekly office hours to meet with students and help them resolve any questions they might have."
        ]
      },
      {
        title: "Student Worker - Hajim School of Engineering Dean's Office",
        responsibilities: [
          "Developed and managed content for new website available to all potential and current students of the Hajim School of Engineering.",
          "Responsible for hosting events, managing front desk, greeting visitors and aiding professional staff with various tasks.",
          "Managed conference room calendar and organized conference and break area with the purpose of having a presentable office space."
        ]
      },
      {
        title: "Teacher Assistant - Computer Science Department",
        responsibilities: [
          "Led lab sessions to help assist and evaluate 20 students with coursework and evaluations.",
          "Developed important communication, leadership and analytical skills by helping course students learn about the course content throughout the semester."
        ]
      },
      {
        title: "Resident Advisor - Residential Life",
        responsibilities: [
          "Supervised a hall of around 25 freshmen the first year and around 40 upperclassmen the second year.",
          "Cooperated with other staff members to plan and execute programs to build community in our halls.",
          "Improved online communication skills by using email as my main source of communication with my residents."
        ]
      }
    ]
  }
}

let education = {
  uofr: {
    name: "University of Rochester",
    location: "Rochester, NY",
    date: "Aug. 2014 - May 2018",
    degree: "BS Computer Science with Minor in Business, Class of 2018",
    scholarships: "Scholarships: Dean's Scholarship",
    studyabroad: "Study Abroad Program: University of Bristol (UK)",
  }
}