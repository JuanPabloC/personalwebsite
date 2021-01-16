import React, {useState} from "react"
import { Menu, Layout, Typography} from "antd"
import styled from "@emotion/styled"

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
                            <Menu.Item key={1}>Software</Menu.Item>
                            <Menu.Item key={2}>Frameworks and Tools</Menu.Item>
                            <Menu.Item key={3}>Communication</Menu.Item>
                        </Menu.ItemGroup>
                    </Menu>
                </Sider>
                <Content>
                    <SkillsWrapper>
                        <Typography>
                            <Title level={3}>Skills Title</Title>
                            <Text> Hello these are my whatever skills</Text>
                        </Typography>
                    </SkillsWrapper>
                </Content>
            </Layout>
        </Wrapper>
        
    )
}

export default SkillsBox