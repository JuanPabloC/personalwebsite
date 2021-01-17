import React, {useState} from "react"

import { Menu, Layout, Typography} from "antd"
import styled from "@emotion/styled"
import SkillPercentage from "./skillpercentage";

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const Wrapper = styled("div")`
    //   border-color: rgba(0,0,0,0.1);
    //   border-style: solid;
    //   border-width: 2px;
`;

const SkillsWrapper = styled("div")`
    padding: 0px 20px;
    font-style: bold;
`;

const getSkillList = (skillslist) => (
    <div>
        {skillslist.skills.map((skl) => (
          <SkillPercentage skill={skl}></SkillPercentage>
        ))}
    </div>
)

const SkillsBox = (props) => {
    return (
        <Wrapper>
            <Layout css={{borderRadius: '20px'}}>
                <Sider>
                    <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline">
                        <Menu.ItemGroup key="g1" title="Skills">
                            <Menu.Item key={1}>{props.skills.software.title}</Menu.Item>
                            <Menu.Item key={2}>{props.skills.frameworks.title}</Menu.Item>
                            <Menu.Item key={3}>{props.skills.communication.title}</Menu.Item>
                            <Menu.Item key={4}>{props.skills.languages.title}</Menu.Item>
                        </Menu.ItemGroup>
                    </Menu>
                </Sider>
                <Content>
                    <SkillsWrapper>
                        <Typography>
                            <Title level={3}>{props.skills.software.title}</Title>
                            <Text>{getSkillList(props.skills.software)}</Text>
                        </Typography>
                    </SkillsWrapper>
                </Content>
            </Layout>
        </Wrapper>
        
    )
}

export default SkillsBox

let example = {
    name: "Javascript",
    level: 0.8
}