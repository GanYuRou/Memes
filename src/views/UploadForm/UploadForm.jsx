import React, { useEffect } from 'react';
import { Form, Input, Upload, Button, Message } from 'antd';
import _ from 'lodash';
import { InboxOutlined } from '@ant-design/icons';
import store from 'store/index';
import { uploadGroup } from 'network/services';
import styles from './UploadForm.module.less';

const { Item } = Form;
const { Dragger } = Upload;
let UPLOADLIST = [];

const UploadForm = () => {

    const [form] = Form.useForm();

    const onFinish = async (values) => {
        values.upload = UPLOADLIST;
        values.tag = values.tag.split(/[、 ]/);
        const resp = await uploadGroup(values);
        // 不管是否上传成功，都要清空
        UPLOADLIST = [];
    }

    const onChange = (info) => {
        const { file: { response } } = info;
        if (response && response.data) {
            UPLOADLIST.push({
                md5: response.data.imageMd5,
                type: response.data.imageType,
                key: response.data.resourceKey,
                url: response.data.resourceUrl
            });
        }
    }

    useEffect(() => {
        const { code, nick } = store.getState();
        nick ? form.setFieldsValue({ person: nick })
                : form.setFieldsValue({ person: code });
    }, [])

    return (
        <div className={styles['upload-wrapper']}>
            <div className={styles['upload-group']}>
                <h1>表情套图投稿</h1>
            </div>
            <Form className={styles['upload-form']}
                form={form}
                labelCol={{ span: 3 }}
                onFinish={onFinish}
            >
                <Item name="title"
                    label="标题"
                >
                    <Input />
                </Item>
                <Item name="person"
                    label="投稿人"
                >
                    <Input disabled />
                </Item>
                <Item name="description"
                    label="描述"
                >
                    <Input.TextArea />
                </Item>
                <Item name="tag"
                    label="标签"
                >
                    <Input />
                </Item>
                <Item name="upload"
                    label="上传"
                >
                    <Dragger action="http://aston.zapto.org:28500/api/image/upload"
                        method="post"
                        multiple={true}
                        name="file"
                        onChange={onChange}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">点击或者拖拽图片进行上传</p>
                        <p className="ant-upload-hint">单次最多可选择图片为10张</p>
                    </Dragger>
                </Item>
                <Item>
                    <Button htmlType="submit"
                        className={styles['upload-button']}
                    >
                        提交
                    </Button>
                </Item>
            </Form>
        </div>
    )
}

export default UploadForm;
