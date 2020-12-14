import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ menuLinks }) => (
  <header>
      <h1 style={{ margin: 0 }} className="logo"> 
        <Link style={{ color: `black` }} to={"/"}>
          JPCastano
        </Link>
      </h1>
    <ul className="nav">
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
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
