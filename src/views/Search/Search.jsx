import React, { Component } from 'react';
import _ from 'lodash';
import store from 'store/index';
import GroupItem from 'components/GroupItem';
import HotTag from 'components/HotTag';
import styles from './Search.module.less';
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        }
        store.subscribe(this.storeChange);
    }

    storeChange = () => {
        const { searchRecords } = store.getState();
        this.setState({ dataSource: searchRecords });
    }

    // 从详情返回再次进行展示
    componentDidMount() {
        this.storeChange();
    }

    // 进入详情
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
            <div className={styles['search-detail-wrap']}>
                <div className={styles['search-detail-left']}>
                    {
                        _.isEmpty(dataSource) || dataSource.map((item) => (
                            <GroupItem {...item}
                                key={item.code}
                                onClick={() => this.handleClick(item)}
                            />
                        ))
                    }
                </div>
                <div className={styles['search-detail-right']}>
                    <HotTag />
                </div>
            </div>
        )
    }
}

export default Search;
