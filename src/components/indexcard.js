import React from "react"

import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Img from "gatsby-image"
import { Col, Divider, Row, Typography } from "antd"

const { Paragraph } = Typography;

const Container = styled("div")`
    width: 100%;
    padding: 0 45px;
`; 

const Card =  styled("div")`
    margin: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 50px;
    background: white;
    border-radius: 20px;
`;

const ImgBox = styled("div")`
    display: flex;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`;

const CardText = styled("div")`
    height: 100%;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding-right: 40px;
`;

const imgedit = css`
    margin: 0;
    width: 80%;
    border-radius: 25px;    
`;

const getOrderLeft = (props) => {
    return (
        <Container>
            <Card>
                <Row>
                    <Col span={8}> {/* Image */}
                        <ImgBox>
                            <Img fluid={props.img} alt="Image" css={imgedit}/>
                        </ImgBox>
                    </Col>
                    <Col span={16}> {/* Text */}
                        <CardText>
                            <Divider style={{borderWidth: 1, borderColor: 'var(--lynch)' }} orientation="left"><h2>{props.title}</h2></Divider>
                            <Typography>
                                <Paragraph css={{whiteSpace: 'pre-wrap'}}>{props.text}</Paragraph>
                            </Typography>
                        </CardText>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
};

const getOrderRight = (props) => {
    return (
        <Container>
            <Card>
                <Row>
                    <Col span={16}> {/* Text */}
                        <CardText>
                            <Divider style={{borderWidth: 1, borderColor: 'var(--lynch)' }} orientation="left"><h2>{props.title}</h2></Divider>
                            <Typography>
                                <Paragraph css={{whiteSpace: 'pre-wrap'}}>{props.text}</Paragraph>
                            </Typography>
                        </CardText>
                    </Col>
                    <Col span={8}> {/* Image */}
                        <ImgBox>
                            <Img fluid={props.img} alt="Image" css={imgedit}/>
                        </ImgBox>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
};



const IndexCard = ({img, text, title, imgPosition}) => {
    if (imgPosition === "right") return getOrderRight({img,text,title})
    else return getOrderLeft({img,text,title});
}

IndexCard.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    img: PropTypes.object.isRequired,
    title: PropTypes.string,
    imgPosition: PropTypes.oneOf(['right', 'left']),
}

IndexCard.defaultProps = {
    imgPosition: `left`
}

export default IndexCard

