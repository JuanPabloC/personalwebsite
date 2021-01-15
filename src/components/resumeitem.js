import React from "react"
import styled from "@emotion/styled"
import { Col, Row, Collapse } from "antd"
import Img from "gatsby-image"
import { css } from "@emotion/react";
import PropTypes from "prop-types"

const { Panel } = Collapse;

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

const respList = (resps) => (

    <ul>
        {resps.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
    </ul>
)

const ResumeItem = (props) => {

    console.log(JSON.stringify(props))

    return (
        <Row css={bottomMargin}>
            <Col span={3}>
                <ImgBox>
                    <a href={props.org.url} target="_blank" rel="noopener noreferrer">
                        <Img fluid={props.image} css={imgedit}/>
                    </a>
                </ImgBox>
            </Col>
            <Col span={15}>
                <ResumeItemHeading>
                    <a href={props.org.url} target="_blank" rel="noopener noreferrer">
                        <ResumeItemTitle>{props.org.name}</ResumeItemTitle>
                    </a>
                    <ResumeItemLocation>{props.org.location}</ResumeItemLocation>
                </ResumeItemHeading>
                <p style={{whiteSpace: 'pre-wrap'}}>{props.org.description}</p>
                <Collapse>
                    {props.org.roles.map((role,index) => (
                        <Panel header={role.title} key={index+1} forceRender="true">
                            <h5 style={{marginBottom: 15}}>Key Responsibilities and Achievements:</h5>
                            {respList(role.responsibilities)}
                        </Panel>
                    ))}
                </Collapse>
            </Col>
            <Col span={6}>
                <ResumeItemDate>{props.org.date}</ResumeItemDate>
            </Col>
        </Row>
    )
}

export default ResumeItem