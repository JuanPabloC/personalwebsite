import React from "react"

import styled from "@emotion/styled"

const SectionTitle = styled("h2")`
    margin-bottom: 0.7em;
    color: rgb(108,5,3);
`;

const Section =  styled("div")`

`;

const ResumeSection = (props) => {
    return (
        <Section>
            <SectionTitle>{props.title}</SectionTitle>
        </Section>
    )
}

export default ResumeSection