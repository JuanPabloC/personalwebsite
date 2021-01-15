import React from "react"
import styled from "@emotion/styled"
import ResumeItem from "./resumeitem"
import PropTypes from "prop-types"


const items = {
    title: "University of Rochester",
    location: "Rochester, NY",
    date: "Aug. 2014 to May 2018",
}

const SectionTitle = styled("h2")`
    margin-bottom: 0.7em;
    color: rgb(108,5,3);
`;

const Section =  styled("div")`

`;

const ResumeSection = (props) => {
    items.image = props.image;

    return (
        <Section>
            <SectionTitle>{props.title}</SectionTitle>
        </Section>
    )
}

export default ResumeSection

ResumeSection.propTypes = {
}

ResumeSection.defaultProps = {
}