import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Menu, Button, Input } from 'antd';

import ModalWrapper from 'hocs/ModalWrapper';
import NormalForm from './NormalForm';
import logo from 'assets/logo.png';
import styles from './NavBar.module.less';

const { Item, SubMenu } = Menu;
const { Search } = Input;

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginVisible: false,
            signVisible: false,
        };
    }

    loginClick = () => {
        this.setState({
            loginVisible: true,
            signVisible: false,
        });
    }

    signClick = () => {
        this.setState({
            loginVisible: false,
            signVisible: true,
        });
    }

    render() {
        const { loginVisible, signVisible } = this.state;
        const Form = ModalWrapper(NormalForm);

        return (
            <div className={styles['header']}>
                <Row>
                    <Col span={3}>
                        <img src={logo} alt="logo" className={styles['logo']} />
                    </Col>
                    <Col span={8}>
                        <Menu mode="horizontal">
                            <Item key="group">
                                <Link to="/group">最新套图</Link>
                            </Item>
                            <Item key="hot">
                                <Link to="/hot">热门表情包</Link>
                            </Item>
                            <Item key="sort">
                                <Link to="/sort">分类</Link>
                            </Item>
                            <Item key="fun">
                                <Link to="/fun">趣图</Link>
                            </Item>
                            <SubMenu title="表情投稿">
                                <Item key="c-group">表情套图</Item>
                                <Item key="c-single">表情单图</Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col span={9} className={styles['search']}>
                        <Search placeholder="输入关键字，搜索表情包" style={{ width: 350 }} />
                    </Col>
                    <Col span={4}>
                        <div className={styles['loginAndReg']}>
                            <Button type="text" onClick={this.loginClick}>登录</Button>
                            <span className={styles['split']} />
                            <Button type="text" onClick={this.signClick}>注册</Button>
                        </div>
                    </Col>
                </Row>
                {
                    signVisible && <Form title="注册" btnText="注册" />
                }
                {
                    loginVisible && <Form title="登录" btnText="登录" />
                }
            </div>
        );
    }
}

export default NavBar;
