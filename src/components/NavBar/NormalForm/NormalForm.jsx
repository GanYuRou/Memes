import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './NormalForm.module.less';

const { Item } = Form;

class NormalFrom extends Component {
    render() {
        const { btnText } = this.props;
        return (
            <Form className={styles['normal-form']}>
                <Item name="username"
                    rules={[{ require: true }]}
                >
                    <Input placeholder="用户名"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                </Item>
                <Item name="password"
                    rules={[{ require: true }]}
                >
                    <Input type="password"
                        placeholder="密码"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                    />
                </Item>
                <Item>
                    <Button block
                        type="primary"
                        className={styles['button']}
                    >
                        {btnText}
                    </Button>
                </Item>
            </Form>
        )
    }
}

export default NormalFrom;
