import React from "react"
import styled from "@emotion/styled"
import { Col, Row } from "antd"
import { css } from "@emotion/react";
import Img from "gatsby-image"
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

const ImagesWrapper = styled("div")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const ImgBox = styled("div")`
    width: 30%;
    min-width: 100px;
    margin-left: auto;
    margin-right: auto;
`;

const getImages = (imgs) => {
    if (imgs.length > 0) {
        return (
            <ImagesWrapper css={bottomMargin}>
                {imgs.map((img) => (
                    <ImgBox>
                        <Img fluid={img} alt="Image"></Img>
                    </ImgBox>
                ))}
            </ImagesWrapper>
        )
    } 

    return (<span/>);
}


const ResumeProjectItem = (props) => {

    return (
        <div>
            <Row css={bottomMargin}>
                {/* Body */}
                <Col span={21}>
                    <ResumeItemHeading>
                        <ResumeItemTitle>{props.project.title}</ResumeItemTitle>
                    </ResumeItemHeading>
                    <p style={{whiteSpace: 'pre-wrap'}}>{props.project.description}</p>

                </Col>
                {/* Date */}
                <Col span={3}>
                    <ResumeItemDate>{props.project.date}</ResumeItemDate>
                </Col>
            </Row>
            {getImages(props.images)}
        </div>
        
    )
}

ResumeProjectItem.defaultProps = {
    images: []
}

export default ResumeProjectItem

