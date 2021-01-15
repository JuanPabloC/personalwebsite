import React from "react"
import styled from "@emotion/styled"
import { Col, Row } from "antd"
import { css } from "@emotion/react";
import PropTypes from "prop-types"

const ResumeItemHeading = styled("div")`
    display: flex;
    justify-content: flex-start;
`;

const ResumeItemTitle = styled("h4")`
    font-weight: bold;
`;

const ResumeItemDate = styled("h4")`
    width = 100%;
    text-align: right;
    font-weight: bold;
`;

const bottomMargin = css`
    margin-bottom: 20px;
`;


const ResumeProjectItem = (props) => {

    console.log(JSON.stringify(props))

    return (
        <Row css={bottomMargin}>

            {/* Body */}
            <Col span={18}>
                <ResumeItemHeading>
                    <ResumeItemTitle>{props.project.title}</ResumeItemTitle>
                </ResumeItemHeading>
                <p>{props.project.description}</p>
            </Col>
            {/* Date */}
            <Col span={6}>
                <ResumeItemDate>{props.project.date}</ResumeItemDate>
            </Col>
        </Row>
    )
}

export default ResumeProjectItem