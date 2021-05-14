import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Menu, Button, Input } from 'antd';
import store from 'store/index';
import request from 'network/request';
import { searchList } from 'network/services';
import { apiOK } from 'utils/utils';
import ModalWrapper from 'hocs/ModalWrapper';
import NormalForm from 'components/NormalForm';
import logo from 'assets/logo.png';
import styles from './NavBar.module.less';

const { Item } = Menu;
const { Search } = Input;
const Form = ModalWrapper(NormalForm);
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
        const { code, nick } = store.getState();
        if (nick) {
            this.setState({ userName: nick });
        } else {
            this.setState({ userName: code });
        }
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

    onSearch = async (value) => {
        const resp = await searchList({ keyword: value })
        if (apiOK(resp)) {
            store.dispatch({ type: 'SEARCH', payload: resp.data.records });
            const history = request.getRouterHistory();
            history.push('/search');
        }
    }

    render() {
        const { loginVisible, signVisible, userName } = this.state;
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
                        <Search style={{ width: 350 }}
                            placeholder="输入关键字，搜索表情包"
                            onSearch={this.onSearch}
                        />
                    </Col>
                    <Col span={4}>
                        {
                            userName ? <div className={styles['name-wrap']}>{userName}</div> : (
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
