import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <h1 style={{ margin: 0 }}> Juan Pablo Castano</h1>
    {/* <ul className="nav">
      {menuLinks.map(link => (
        <li
          key={link.name}
          className="navItem"
        >
          <Link style={{ color: `black` }} to={link.link}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
