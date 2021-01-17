import React from "react"

import {Typography, Slider, Space, Col, Row, Progress} from "antd"

const { Title } = Typography;

const SkillPercentage = (props) => {
    return (
        <Row>
            <Col span={6}> 
                <Title level={5}>{props.skill.name}</Title>
            </Col>
            <Col span={18}>
                <Progress percent={props.skill.level*100} showInfo={true}></Progress>
            </Col>
        </Row>
    )
}

export default SkillPercentage