import React, { useState } from 'react';
import { apiOK } from 'utils/utils';
import store from 'store/index';
import { cancelGroupStar } from 'network/services';
import styles from './StarItem.module.less';

const StarItem = (props) => {
    const { code, title, images, onClick, starListSplice } = props;
    const user = store.getState().code;
    const [isStar, setIsStar] = useState(true)

    const handleCancelClick = async (event) => {
        event.stopPropagation();
        const resp = await cancelGroupStar({ userCode: user, groupCode: code });
        apiOK(resp) && setIsStar(false);
        // 从收藏列表中移除
        starListSplice(code)
    };

    return (
        <div className={styles['star-item']}
            onClick={onClick}
        >
            <div className={styles['star']}>
                <div className={isStar ? styles['active'] : styles['no-active']}>
                    <span className="iconfont icon-forum_help_start-copy"
                        onClick={handleCancelClick}
                    />
                </div>
            </div>
            <img src={images[0].url} alt="" />
            <div className={styles['title']}>{title}</div>
        </div>
    );
}

export default StarItem;
