import React, { Component } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const { Item } = Form;

class SimpleFrom extends Component {
    render() {
        const { form: { getFieldDecorator } } = this.props;
        return (
            <Modal>
                <Form>
                    <Item>
                        {
                            getFieldDecorator('username', {
                                rules: [{
                                    require: true,
                                    message: '用户名不为空',
                                    pattern: /^[a~f|0-9]{8}$/
                                }]
                            })
                        }(<Input placeholder="请输入用户名"/>)
                    </Item>
                    <Item>
                        {
                            getFieldDecorator('username', {
                                rules: [{
                                    require: true,
                                    message: '密码不为空',
                                    pattern: /^[a~f|0-9]{8}$/
                                }]
                            })
                        }(<Input placeholder="请输入密码"/>)
                    </Item>
                    <Item>
                        <Button>注册</Button>
                    </Item>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(SimpleFrom);
