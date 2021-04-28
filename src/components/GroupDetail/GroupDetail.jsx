import React, { Component } from 'react';
import styles from './GroupDetail.module.less';

class GroupDetail extends Component {

    render() {
        const { detail: { title, images, tags } } = this.props.location.state;
        return (
            <div className={styles['detail-wrap']}>
                <div className={styles['detail-head']}>
                    <div className={styles['detail-head-title']}>{title}</div>
                    <div className={styles['detail-head-tags']}>
                        <span>所属标签：</span>
                        {
                            tags.map(item => (<span className={styles['tag']} key={item.code}>{item.name}</span>))
                        }
                    </div>
                </div>
                <div className={styles['detail-container']}>
                    {
                        images.map((item, index) => (
                            <img key={index} src={item.url} alt="" />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default GroupDetail;
