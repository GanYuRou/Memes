import React, { Component } from 'react';
import { Row, Col, Menu, Button, Input } from 'antd';
// import ModalWrapper from 'hocs/ModalWrapper';
// import Form from './Form';
import logo from 'assets/logo.png';
import styles from './NavBar.module.less';

const { Item } = Menu;
const { Search } = Input;

console.log(logo);

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { showForm: false };
    }

    render() {
        // const { showForm } = this.state;
        // const ModalForm = ModalWrapper(Form);

        return (
            <div className={styles['header']}>
                <Row>
                    <Col span={3}>
                        <img src={logo} alt="logo" className={styles['logo']} />
                    </Col>
                    <Col span={8}>
                        <Menu mode="horizontal">
                            <Item key="group">最新套图</Item>
                            <Item key="meme">最新表情包</Item>
                            <Item key="sort">分类</Item>
                            <Item key="interest">趣图</Item>
                            <Item key="post">发布表情包</Item>
                        </Menu>
                    </Col>
                    <Col span={9} className={styles['search']}>
                        <Search placeholder="输入关键字，搜索表情包" style={{ width: 350 }} />
                    </Col>
                    <Col span={4}>
                        <div className={styles['loginAndReg']}>
                            <Button type="text">登录</Button>
                            <span className={styles['split']} />
                            <Button type="text">注册</Button>
                        </div>
                    </Col>
                </Row>
                {/* {
                    showForm && (
                        <ModalForm title="注册" />
                    )
                } */}
            </div>
        );
    }
}

export default NavBar;
