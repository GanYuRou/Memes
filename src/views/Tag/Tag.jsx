import React, { Component } from 'react';
import _ from 'lodash';
import store from 'store/index';
import GroupItem from 'components/GroupItem';
import HotTag from 'components/HotTag';
import styles from './Tag.module.less';

class Tag extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        }
        store.subscribe(this.storeChange);
    }

    storeChange = () => {
        const { tagRecords } = store.getState();
        this.setState({ dataSource: tagRecords });
    }

    componentDidMount() {
        this.storeChange();
    }
 
    handleClick = (detail) => {
        const { history } = this.props;
        history.push({
            pathname: '/detail',
            state: { detail }
        });
    }

    render() {
        const { dataSource } = this.state;

        return (
            <div className={styles['tag-detail-wrap']}>
                <div className={styles['tag-detail-left']}>
                    {
                        _.isEmpty(dataSource) || dataSource.map((item) => (
                            <GroupItem {...item}
                                key={item.code}
                                onClick={() => this.handleClick(item)}
                            />
                        ))
                    }
                </div>
                <div className={styles['tag-detail-right']}>
                    <HotTag />
                </div>
            </div>
        )
    }
}

export default Tag;
