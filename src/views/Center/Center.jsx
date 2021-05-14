import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import moment from 'moment';
import _ from 'lodash';
import store from 'store/index';
import { apiOK } from 'utils/utils';
import StarItem from 'components/StarItem';
import styles from './Center.module.less';
import {
    modifyInfomation,
    fetchInformation,
    fetchStarList,
    fetchSelfList,
} from 'network/services';

const { Item } = Form;

const Center = (props) => {

    const [form] = Form.useForm();
    const { code, nick } = store.getState();
    const [starList, setStarList] = useState([]);
    const [uploadList, setUploadList] = useState([]);

    useEffect(() => {
        initInformation();
        fetchStarGroups();
        fetchUploadGroups();
    }, []);

    const goGroupPage = () => {
        const { history } = this.props;
        history.push('/group');
    }

    const goUploadPage = () => {
        const { history } = this.props;
        history.push('/upload');
    }

    const handleClick = (detail) => {
        const { history } = props;
        history.push({
            pathname: '/detail',
            state: { detail },
        })
    }

    // 初始化基本信息
    const initInformation = async () => {
        const resp = await fetchInformation({ code });
        if (apiOK(resp)) {
            const [info] = resp.data;
            info.birthday = moment(info.birthday).format('YYYY-MM-DD')
            form.setFieldsValue(info);
        }
    }

    // 修改基本信息
    const onFinish = async (values) => {
        const resp = await modifyInfomation({ code, ...values });
        apiOK(resp) && store.dispatch({ type: 'NICK', payload: values.nick });
    }

    const fetchStarGroups = async () => {
        const resp = await fetchStarList({ code });
        apiOK(resp) && setStarList(resp.data.records);
    }

    const fetchUploadGroups = async () => {
        const resp = nick ? await fetchSelfList({ nick })
            : await fetchSelfList({ nick: code });
        apiOK(resp) && setUploadList(resp.data.records);
    }

    const starListSplice = (code) => {
        const arr = starList.filter(item => item.code !== code);
        setStarList(arr);
    }

    return (
        <div className={styles['center-wrapper']}>
            <div className={styles['part-one']}>
                <div className={styles['center-head']}>
                    <h1>个人信息修改</h1>
                </div>
                <Form form={form}
                    labelCol={{ span: 3 }}
                    className={styles['msg-form']}
                    onFinish={onFinish}
                >
                    <Item name="nick"
                        label="用户名"
                    >
                        <Input />
                    </Item>
                    <Item name="email"
                        label="邮箱"
                    >
                        <Input />
                    </Item>
                    <Item name="gender"
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
                        <Button type="primary"
                            htmlType="submit"
                        >
                            保存
                        </Button>
                    </Item>
                </Form>
            </div>
            <div className={styles['part-two']}>
                <div className={styles['center-head']}>
                    <h1>我收藏的表情包</h1>
                </div>
                {
                    _.isEmpty(starList) ? (
                        <div className={styles['empty']}>
                            <div className={styles['text']}>
                                还没有收藏表情包
                            </div>
                            <Button type="primary" onClick={goGroupPage}>
                                来首页看看
                        </Button>
                        </div>
                    ) : (
                        <div className={styles['star-list']}>
                            {
                                starList.map(item => (
                                    <StarItem {...item}
                                        key={item.code}
                                        starListSplice={starListSplice}
                                        onClick={() => handleClick(item)}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            <div className={styles['part-three']}>
                <div className={styles['center-head']}>
                    <h1>我发布的表情包</h1>
                </div>
                {
                    _.isEmpty(uploadList) ? (
                        <div className={styles['empty']}>
                            <div className={styles['text']}>
                                还没有发布表情包
                            </div>
                            <Button type="primary" onClick={goUploadPage}>
                                点击发布
                        </Button>
                        </div>
                    ) : (
                        <div className={styles['upload-list']}>
                            {
                                uploadList.map(item => (
                                    <div key={item.code}
                                        className={styles['upload-item']}
                                        onClick={() => handleClick(item)}
                                    >
                                        <img src={item.images[0].url} alt="" />
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Center;
