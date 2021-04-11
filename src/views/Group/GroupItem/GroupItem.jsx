import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import styles from './GroupItem.module.less';

class GroupItem extends Component {

    render() {
        console.log(this.props);
        const { code, title, images, onClick } = this.props;
        return (
            <div className={styles['group-item']} onClick={onClick}>
                <h2 className={styles['title']}>{title}</h2>
                <div className={styles['star']}><HeartOutlined /></div>
                <Row>
                    {
                        images.slice(0, 4).map(item => (
                            <Col span={6}>
                                <div className={styles['image']}>
                                    <img src={item.url} alt="" />
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )
    }
}

export default GroupItem;