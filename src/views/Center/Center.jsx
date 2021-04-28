import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styles from './Center.module.less';

const { Item } = Form;

class Center extends Component {

    goGroupPage = () => {
        const { history } = this.props;
        history.push('/group');
    }

    goUploadPage = () => {
        const { history } = this.props;
        history.push('/upload');
    }

    render() {
        return (
            <div className={styles['center-wrapper']}>
                <div className={styles['part-one']}>
                    <div className={styles['center-head']}>
                        <h1>个人信息修改</h1>
                    </div>
                    <Form className={styles['msg-form']} labelCol={{ span: 3 }}>
                        <Item name="username"
                            label="用户名"
                        >
                            <Input />
                        </Item>
                        <Item name="email"
                            label="邮箱"
                        >
                            <Input />
                        </Item>
                        <Item name="sex"
                            label="性别"
                        >
                            <Input />
                        </Item>
                        <Item name="birthday"
                            label="生日"
                        >
                            <Input />
                        </Item>
                        <Item>
                            <Button type="primary" className={styles['upload-button']}>
                                保存
                            </Button>
                        </Item>
                    </Form>
                </div>
                <div className={styles['part-two']}>
                    <div className={styles['center-head']}>
                        <h1>我收藏的表情包</h1>
                    </div>
                    <div>
                        <div className={styles['empty']}>
                            <div className={styles['text']}>
                                还没有收藏表情包
                            </div>
                            <Button type="primary" onClick={this.goGroupPage}>
                                来首页看看
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={styles['part-three']}>
                    <div className={styles['center-head']}>
                        <h1>我发布的表情包</h1>
                    </div>
                    <div className={styles['empty']}>
                        <div className={styles['text']}>
                            还没有发布表情包
                        </div>
                        <Button type="primary" onClick={this.goUploadPage}>
                            点击发布
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Center;
