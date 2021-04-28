import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Menu, Button, Input } from 'antd';
import store from 'store/index';
import ModalWrapper from 'hocs/ModalWrapper';
import NormalForm from 'components/NormalForm';
import logo from 'assets/logo.png';
import styles from './NavBar.module.less';

const { Item } = Menu;
const { Search } = Input;

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginVisible: false,
            signVisible: false,
            userName: store.getState(),
        };
        store.subscribe(this.storeChange);
    }

    storeChange = () => {
        this.setState({ userName: store.getState() });
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
        const { loginVisible, signVisible, userName } = this.state;
        console.log(userName);
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
                            {
                                userName ? (
                                    <React.Fragment>
                                        <Item key="upload">
                                            <NavLink activeClassName={styles['active']} to="/upload">投稿</NavLink>
                                        </Item>
                                        <Item key="center">
                                            <NavLink activeClassName={styles['active']} to="/center">个人中心</NavLink>
                                        </Item>
                                    </React.Fragment>
                                ) : null
                            }
                        </Menu>
                    </Col>
                    <Col span={9} className={styles['search']}>
                        <Search placeholder="输入关键字，搜索表情包" style={{ width: 350 }} />
                    </Col>
                    <Col span={4}>
                        {
                            userName ? <div>{userName}</div> : (
                                <div className={styles['loginAndReg']}>
                                    <Button type="text" onClick={this.loginClick}>登录</Button>
                                    <span className={styles['split']} />
                                    <Button type="text" onClick={this.signClick}>注册</Button>
                                </div>
                            )
                        }
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
