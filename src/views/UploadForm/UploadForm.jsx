import React, { Component } from 'react';
import { Form, Input, Upload, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styles from './UploadForm.module.less';

const { Item } = Form;
const { Dragger } = Upload;

class UploadForm extends Component {

    render() {
        return (
            <div className={styles['upload-wrapper']}>
                <div className={styles['upload-group']}>
                    <h1>表情套图投稿</h1>
                </div>
                <Form className={styles['upload-form']} labelCol={{ span: 3 }}>
                    <Item name="title"
                        label="标题"
                    >
                        <Input />
                    </Item>
                    <Item name="person"
                        label="投稿人"
                    >
                        <Input />
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
                        >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">点击或者拖拽图片进行上传</p>
                            <p className="ant-upload-hint">单次最多可选择图片为10张</p>
                        </Dragger>
                    </Item>
                    <Item>
                        <Button className={styles['upload-button']}>
                            提交
                        </Button>
                    </Item>
                </Form>
            </div>
        )
    }
}

export default UploadForm;
