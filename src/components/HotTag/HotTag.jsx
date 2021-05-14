import React, { useEffect, useState } from 'react';
import store from 'store/index';
import request from 'network/request';
import { fetchHotTags, fetchHotGroups } from 'network/services';
import { apiOK } from 'utils/utils';
import styles from './HotTag.module.less';

const HotTag = (props) => {

    const [tagsList, setTagsList] = useState([]);

    const fetchTagsList = async () => {
        const resp = await fetchHotTags();
        if(apiOK(resp)) {
            setTagsList(resp.data.records);
        }
    }

    useEffect(() => {
        fetchTagsList();
    }, []);

    const handleClickTAg = async (code) => {
        const resp = await fetchHotGroups({ code });
        if (apiOK(resp)) {
            const history = request.getRouterHistory();
            store.dispatch({ type: 'TAG', payload: resp.data.records });
            history.push('/tag');
        }
    };

    return (
        <div className={styles['hot-tag-wrap']}>
            <div className={styles['hot-tag-head']}>热门标签</div>
            <div className={styles['hot-tag-content']}>
            {
                tagsList.map(item => (
                    <div key={item.code}
                        className={styles['tag']}
                        onClick={() => handleClickTAg(item.code)}
                    >
                        {item.name}
                    </div>
                ))
            }
            </div>
        </div>
    )
};

export default HotTag;
