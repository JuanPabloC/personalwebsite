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
    const [currentList, setCurrentList] = useState(props.skills.software);

    return (
        <Wrapper>
            <Layout css={{borderRadius: '20px'}}>
                <Sider>
                    <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline">
                        <Menu.ItemGroup key="g1" title="Skills">
                            <Menu.Item key={1} onClick={() => setCurrentList(props.skills.software)}>{props.skills.software.title}</Menu.Item>
                            <Menu.Item key={2} onClick={() => setCurrentList(props.skills.frameworks)}>{props.skills.frameworks.title}</Menu.Item>
                            <Menu.Item key={3} onClick={() => setCurrentList(props.skills.foundations)}>{props.skills.foundations.title}</Menu.Item>
                            <Menu.Item key={4} onClick={() => setCurrentList(props.skills.communication)}>{props.skills.communication.title}</Menu.Item>
                            <Menu.Item key={5} onClick={() => setCurrentList(props.skills.languages)}>{props.skills.languages.title}</Menu.Item>
                        </Menu.ItemGroup>
                    </Menu>
                </Sider>
                <Content>
                    <SkillsWrapper>
                        <Typography>
                            <Title level={3}>{currentList.title}</Title>
                            <Text>{getSkillList(currentList)}</Text>
                        </Typography>
                    </SkillsWrapper>
                </Content>
            </Layout>
        </Wrapper>
        
    )
}

export default SkillsBox