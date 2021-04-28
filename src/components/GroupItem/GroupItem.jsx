import React, { Component } from 'react';
import { Row, Col, Message } from 'antd';
import store from 'store/index';
import styles from './GroupItem.module.less';

class GroupItem extends Component {

    handleStarClick = (event) => {
        event.stopPropagation();
        const user = store.getState();
        if(user) {
            console.log('123');
        } else {
            Message.info('请先完成登录，再添加收藏！');
        }
    }

    render() {
        const { code, title, images, onClick } = this.props;
        return (
            <div className={styles['group-item']} onClick={onClick}>
                <div className={styles['group-item-head']}>
                    <h2 className={styles['title']}>{title}</h2>
                    <div className="iconfont icon-forum_help_start-copy"
                        onClick={this.handleStarClick}
                    />
                </div>
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