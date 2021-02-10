import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexCard from "../components/indexcard"
import Banner from "../components/banner"

const IndexPage = (props) => {

  return (
    <Layout>
      <SEO title="Home" />
      <Banner img={props.data.indexImage} text={"Hi! Welcome to my site."} size="large"></Banner>
      <IndexCard img={props.data.whoami.childImageSharp.fluid} text={whoamiText} title="Who I Am" imgPosition="left"/>
      <IndexCard img={props.data.whereimat.childImageSharp.fluid} text={whereimatText} title="Where I'm At" imgPosition="right"/>
      <IndexCard img={props.data.whativalue.childImageSharp.fluid} text={whativalueText} title="What I Value" imgPosition="left"/>
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
    whoami: file(relativePath: {eq: "nycskyline.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    whereimat: file(relativePath: {eq: "whereimat.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    whativalue: file(relativePath: {eq: "whativalue.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const whoamiText = `Hello! My name is Juan Pablo Castaño, but I go by JP. I was born and raised in Mexico, and have lived in the US for 6 years. Even though I love everything about Mexico, and that\'s where most of my family is, I decided in high school that I wanted to branch out and continue my education in the US. That led me to the University of Rochester, where I graduated as part of the Class of 2018 with a BS in Computer Science and a minor in Business. I will always appreciate Rochester, NY for the countless memories and for connecting me to now life-long friends.

When I graduated, I decided to take a leap of faith and follow my dream of living in New York City. So, I moved to the big apple with no job or savings, but with a plan and an amazing support system of friends and family.

After a couple of stressful months of job searching, I got the opportunity to join Code Climate, an awesome startup leading the Engineering Intelligence industry. I joined as a Sales Development Representative and spent the next two years working and learning alongside incredible minds, some of which I now call best friends. Now, I'm looking for my next big move.`

const whereimatText = `I am currently looking to kickstart my career as a Software Engineer! With a Computer Science degree, software engineering internship experience, continuous programming practice and education, and two years at a tech start-up, I have a great foundation to start as a junior developer.

My goal is to join a tech company that prides itself in their positive impact to society. I'd love to build amazing software products or services that ultimately help improve people's lives. My dream job would also allow me to learn from experienced mentors and coworkers, while also offering enough independence as a developer to problem-solve and be creative.

Most of my coding experience falls under web development, particularly front-end (I built this website myself from scratch). I am, however, very interested and excited to learn new languages, technologies and practices that would help me grow to be well-rounded engineer.`

const whativalueText = `• Gratitude: I had the privilege of growing up in a loving and supporting family, where my parents provided me everything I needed to be successful. I'll forever be grateful for their love and support, and now I try to live my life never forgetting to be thankful for everything I have.  
   
• Honesty & Openness: Communication is key. I believe in the power of good communication both in our personal and professional lives, but it only works if it's honest. This is why I try to always be as open and honest as possible with family, friends, and colleagues, even when it's hard or uncomfortable.

• Fun Hard Work: We require commitment and hard work to get things done, and I believe that for people to do their best work, they need an environment that allows for it. This is why I always try to foster a culture where people are inspired and motivated to work hard and enjoy themselves. Plus, I've always worked very hard to achieve my own goals, so I like to surround myself with like-minded individuals.

• Diversity and Inclusion: Having lived in four countries up to this point, where I've met people from many different walks of life, I've grown to understand the importance of diversity. Both in people and of thought. A diverse community, both in our personal and work lives, is incredibly important, and it is only achievable if its inclusive of everyone and anyone. So, I always strive to become more inclusive myself, and will always try my best to make my surroundings inclusive as well.`