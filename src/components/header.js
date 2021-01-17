import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Header = ({ menuLinks }) => {
  const logoq = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "logos/logo_blood_red.png"}) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header>
      <h1 style={{ margin: 0 }} className="logo"> 
        <Link to={"/"}>
          <Img fixed={logoq.logo.childImageSharp.fixed} alt="JP" />
        </Link>
        <Link style={{ color: `black`, paddingBottom:8 }} to={"/"}>
          Castaño
        </Link>
      </h1>
      <ul className="nav">
        {menuLinks.map(link => (
          <li
            key={link.name}
            className="navItem"
          >
            <Link to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
