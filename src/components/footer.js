import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Footer = ({menuLinks}) => (
    <footer>
      © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
)
  
export default Footer
  