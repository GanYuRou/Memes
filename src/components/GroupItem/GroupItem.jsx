import React, { Component } from 'react';
import { Row, Col, Message } from 'antd';
import { apiOK } from 'utils/utils';
import store from 'store/index';
import styles from './GroupItem.module.less';
import {
    starGroup,
    groupStarExist,
    cancelGroupStar,
} from 'network/services';
class GroupItem extends Component {

    constructor(props) {
        super(props);
        this.state = { isStar: false };
        store.subscribe(this.userStar);
    }

    componentDidMount() {
        this.userStar();
    }

    componentDidUpdate(preProps) {
        if(this.props !== preProps) {
            this.userStar();
        }
    }

    // 当用户登录时，判断表情包是否已收藏
    userStar = async () => {
        const user = store.getState().code;
        if (user) {
            const { code } = this.props;
            const resp = await groupStarExist({ userCode: user, groupCode: code });
            if (apiOK(resp)) {
                const { data: { exist } } = resp;
                exist ? this.setState({ isStar: true }) : this.setState({ isStar: false });
            }
        }
    }

    // 点击收藏 or 取消收藏
    handleStarClick = async (event) => {
        event.stopPropagation();
        const user = store.getState().code;
        if (user) {
            const { code } = this.props;
            const { isStar } = this.state;
            if (isStar) {
                const resp = await cancelGroupStar({ userCode: user, groupCode: code });
                apiOK(resp) && this.setState({ isStar: false }); 
            } else {
                const resp = await starGroup({ userCode: user, groupCode: code });
                apiOK(resp) && this.setState({ isStar: true });
            }
        } else {
            Message.info('请先完成登录，再添加收藏！');
        }
    }

    render() {
        const { title, images, onClick } = this.props;
        const { isStar } = this.state;
        return (
            <div className={styles['group-item']}
                onClick={onClick}
            >
                <div className={styles['group-item-head']}>
                    <h2 className={styles['title']}>{title}</h2>
                    <div className={isStar ? styles['active'] : styles['no-active']}>
                        <span className="iconfont icon-forum_help_start-copy"
                            onClick={this.handleStarClick}
                        />
                    </div>
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
