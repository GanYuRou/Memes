import React, { Component } from 'react';
import styles from './GroupDetail.module.less';

class GroupDetail extends Component {

    render() {
        const { detail: { title, urls } } = this.props.location.state;
        return (
            <div className={styles['detail-wrap']}>
                <div className={styles['detail-title']}>{title}</div>
                <div className={styles['detail-container']}>
                    {
                        urls.map((item, index) => (
                            <img key={index} src={item} alt="" />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default GroupDetail;
