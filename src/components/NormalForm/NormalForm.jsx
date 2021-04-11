import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { martchLogin, RegisterUser } from 'network/services';
import styles from './NormalForm.module.less';

const { Item } = Form;


const NormalFrom = (props) => {
    const [form] = Form.useForm();
    const { btnText, type } = props;

    const handleConfirm = () => {
        form.validateFields()
        .then(async value => {
            if(type === 'login') {
                const resp = await martchLogin(value);
                console.log(resp);
            } else {
                console.log('reg');
                const resp = await RegisterUser(value);
                console.log(resp);
            }
        })
        .catch(err => {
            console.log(err);
            // const {email, password} = err.values;
            // if(!email) {
            //     Message.error('邮箱或者密码不能为空！');
            // }
        });
    }

    return (
        <Form className={styles['normal-form']}
            form={form}
        >
            <Item name="email"
                rules={[{
                    required: true,
                    message: '邮箱格式不正确',
                    pattern: /^[a-zA-z0-9_-]+@[a-zA-z0-9_-]+(\.[a-zA-z0-9_-]+)+$/
                }]}
            >
                <Input placeholder="邮箱"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                />
            </Item>
            <Item name="password"
                rules={[{
                    required: true,
                    message: '密码最少六位且至少包含一个大写字母',
                    pattern: /^(?=.*[A-Z])(?=.*\d)[\s\S]{6,16}$/ 
                }]}
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
                    onClick={handleConfirm}
                >
                    {btnText}
                </Button>
            </Item>
        </Form>
    );
}

export default NormalFrom;
