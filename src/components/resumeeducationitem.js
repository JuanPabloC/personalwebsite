import React from "react"

import styled from "@emotion/styled"
import { Col, Row } from "antd"
import Img from "gatsby-image"
import { css } from "@emotion/react";
import { Link } from "gatsby";

const ImgBox = styled("div")`
    width: 70%;
    display: block;
    margin-left: 0;
    margin-right: auto;
`;

const imgedit = css`
    width: 100%;

    &:hover {
        opacity: 0.8;
    }
`;

const ResumeItemHeading = styled("div")`
    display: flex;
    justify-content: flex-start;
`;

const ResumeItemLocation = styled("h4")`
    font-style: italic;
    margin-left: 20px;
`;

const ResumeItemTitle = styled("h4")`
    font-weight: bold;

    &:hover {
        color: grey;
    }
`;

const ResumeItemDate = styled("h4")`
    width = 100%;
    text-align: right;
    font-weight: bold;
`;

const bottomMargin = css`
    margin-bottom: 20px;
`;


const ResumeEducationItem = (props) => {

    console.log(JSON.stringify(props))

    return (
        <Row css={bottomMargin}>

            {/* logo */}
            <Col span={3}>
                <ImgBox>
                    <a href={props.org.url} target="_blank" rel="noopener noreferrer">
                        <Img fluid={props.image} css={imgedit}/>
                    </a>
                </ImgBox>
            </Col>

            {/* Body */}
            <Col span={15}>
                <ResumeItemHeading>
                    <a href={props.org.url} target="_blank" rel="noopener noreferrer">
                        <ResumeItemTitle>{props.org.name}</ResumeItemTitle>
                    </a>
                    <ResumeItemLocation>{props.org.location}</ResumeItemLocation>
                </ResumeItemHeading>
                <p>{props.org.degree}</p>
                <p>{props.org.scholarships}</p>
                <p>{props.org.studyabroad}</p>
                <Link to="/skills">Go to relevant coursework</Link>
            </Col>

            {/* Date */}
            <Col span={6}>
                <ResumeItemDate>{props.org.date}</ResumeItemDate>
            </Col>
        </Row>
    )
}

export default ResumeEducationItem