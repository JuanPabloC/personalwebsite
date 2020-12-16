import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Img from "gatsby-image"

import { Col, Divider, Row } from "antd"

const Container = styled("div")`
    width: 100%;
    padding: 45px;
`; 

const Card =  styled("div")`
    margin: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 50px;
    background: var(--off-white);
    border-radius: 20px;
`;


const ImgBox = styled("div")`
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const CardText = styled("div")`
    height: 100%;
    margin: auto;
    padding: 20px;
    text-align: left;
`;

const CardHeading = styled("div")`
    padding: 10px 0;
`;

const Paragraph = styled("div")`
    text-size: 20px;
`;

const imgedit = css`
    margin: 0;
    overflow: hidden;
    border-radius: 25px;    
`;



const IndexCard = ({img, text, title}) => {
    return (
        <Container>
            <Card>
                <CardHeading>
                    <Divider orientation="right"><h2>{title}</h2></Divider>
                </CardHeading>
                <Row align={"middle"}>
                    <Col span={8}>
                        <ImgBox>
                            <Img fluid={img} alt="Image" css={imgedit}/>
                        </ImgBox>
                    </Col>
                    <Col span={16}>
                        <CardText>
                        {text.map(par => (
                            <div>
                                <Paragraph>{par}</Paragraph>
                                <p/>
                            </div>
                        ))}
                        </CardText>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}


export default IndexCard