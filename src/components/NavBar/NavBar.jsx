import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Menu, Button, Input } from 'antd';

import ModalWrapper from 'hocs/ModalWrapper';
import NormalForm from 'components/NormalForm';
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
                                <NavLink activeClassName={styles['active']} to="/group">最新套图</NavLink>
                            </Item>
                            <Item key="hot">
                                <NavLink activeClassName={styles['active']} to="/hot">热门表情包</NavLink>
                            </Item>
                            <Item key="sort">
                                <NavLink activeClassName={styles['active']} to="/sort">分类</NavLink>
                            </Item>
                            <Item key="fun">
                                <NavLink activeClassName={styles['active']} to="/fun">趣图</NavLink>
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
                    signVisible && <Form title="注册" btnText="注册" type="register" />
                }
                {
                    loginVisible && <Form title="登录" btnText="登录" type="login" />
                }
            </div>
        );
    }
}

export default NavBar;
