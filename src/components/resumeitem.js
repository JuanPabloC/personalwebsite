import React from "react"
import styled from "@emotion/styled"
import { Col, Row } from "antd"
import Img from "gatsby-image"
import { css } from "@emotion/react";
import PropTypes from "prop-types"


const ImgBox = styled("div")`
    width: 70%;
    display: block;
    margin-left: 0;
    margin-right: auto;
`;

const imgedit = css`
    width: 85%;
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
`;

const ResumeItemDate = styled("h4")`
    width = 100%;
    text-align: right;
    font-weight: bold;
`;

const ResumeItemDescription = styled("p")``;

const bottomMargin = css`
    margin-bottom: 20px;
`;

const ResumeItem = (props) => {

    console.log(JSON.stringify(props))

    return (
        <Row css={bottomMargin}>
            <Col span={3}>
                <ImgBox>
                    <Img fluid={props.image} css={imgedit}/>
                </ImgBox>
            </Col>
            <Col span={15}>
                <ResumeItemHeading>
                    <ResumeItemTitle>{props.org.name}</ResumeItemTitle>
                    <ResumeItemLocation>{props.org.location}</ResumeItemLocation>
                </ResumeItemHeading>
                <ResumeItemDescription>{props.org.description}</ResumeItemDescription>
            </Col>
            <Col span={6}>
                <ResumeItemDate>{props.org.date}</ResumeItemDate>
            </Col>
        </Row>
    )
}

export default ResumeItem