import React from "react"

import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"


const BlackOverlay = styled("div")`
width: 100%;
// height: 20vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: -webkit-flex; /* Safari */
display: flex;
flex-direction: column;
background-color: rgba(0, 0, 0, 0.6);
justify-content: center;
align-items: center;
`;

const BannerHeading = styled("h1")`
    color: white;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 3.5rem;
    margin-bottom: 0px;
`;

const Banner = (props) => {
    let overlay;

    if (props.size === 'small'){
        overlay = <BlackOverlay css={{height: '20vh'}}><BannerHeading style={{whiteSpace: 'pre-wrap'}}>{props.text}</BannerHeading></BlackOverlay>
    } else {
        overlay = <BlackOverlay css={{height: '80vh'}}><BannerHeading style={{whiteSpace: 'pre-wrap'}}>{props.text}</BannerHeading></BlackOverlay>
    }

    return (
        <BackgroundImage
        fluid={props.img.childImageSharp.fluid}>
            {overlay}
        </BackgroundImage>
    )
}

Banner.propTypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf(['large', 'small']),
    img: PropTypes.object.isRequired
}

Banner.defaultProps = {
    size: `small`
}

export default Banner