import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Footer = () => {

  const images = useStaticQuery(graphql`
    query {
      instagramImage: file(relativePath: {eq: "logos/instagram.png"}) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedinImage: file(relativePath: {eq: "logos/linkedin.png"}) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      facebookImage: file(relativePath: {eq: "logos/facebook.png"}) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubImage: file(relativePath: {eq: "logos/github.png"}) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      emailImage: file(relativePath: {eq: "logos/email.png"}) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <footer>
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
        <div>
          <ul className="socialsList">
            <li key="Instagram" className="socialsItem">
              <a href="https://www.instagram.com/juanpablocastano/" target="_blank" rel="noopener noreferrer">
                <Img fixed={images.instagramImage.childImageSharp.fixed} alt="Instagram" />
              </a>
            </li>
            <li key="LinkedIn" className="socialsItem">
              <a href="http://www.linkedin.com/in/jpcastanom/" target="_blank" rel="noopener noreferrer">
                <Img fixed={images.linkedinImage.childImageSharp.fixed} alt="LinkedIn"/>
              </a>
            </li>
            <li key="GitHub" className="socialsItem">
              <a href="https://github.com/JuanPabloC" target="_blank" rel="noopener noreferrer">
                <Img fixed={images.githubImage.childImageSharp.fixed} alt="GitHub"/>
              </a>
            </li>
            <li key="Facebook" className="socialsItem">
              <a href="https://www.facebook.com/JPCastanoMoreno/" target="_blank" rel="noopener noreferrer">
                <Img fixed={images.facebookImage.childImageSharp.fixed} alt="Facebook"/>
              </a>
            </li>
            <li key="Email" className="socialsItem">
              <a href="mailto:jpcastanom@gmail.com" target="_blank" rel="noopener noreferrer">
                <Img fixed={images.emailImage.childImageSharp.fixed} alt="Email"/>
              </a>
            </li>
          </ul>
        </div>
    </footer>
  )
}

  
export default Footer