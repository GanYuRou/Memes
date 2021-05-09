import React, { Component } from 'react';
import { Pagination } from 'antd';
import _ from 'lodash';
import { apiOK } from 'utils/utils';
import { fetchHotList } from 'network/services';
import GroupItem from 'components/GroupItem';
import HotTag from 'components/HotTag';
import styles from './Hot.module.less';

class Hot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            dataSource: [],
        }
    }

    fetchHot = async (params = { pageNo: 1, pageSize: 6 }) => {
        const resp = await fetchHotList(params);
        if (apiOK(resp)) {
            const { data } = resp;
            this.setState({ dataSource: data.records, total: data.total });
        }
    }

    async componentDidMount() {
        this.fetchHot();
    }

    handleClick = (detail) => {
        const { history } = this.props;
        history.push({
            pathname: '/detail',
            state: { detail }
        });
    }

    handleChange = async (current, pageSize) => {
        this.fetchHot({ pageNo: current, pageSize });
    }

    render() {
        const { dataSource, total } = this.state;
        return (
            <div className={styles['hot-wrap']}>
                <div className={styles['hot-left']}>
                    {
                        _.isEmpty(dataSource) || dataSource.map((item, index) => (
                            <GroupItem {...item}
                                key={item.code}
                                onClick={() => this.handleClick(item)}
                            />
                        ))
                    }
                    {
                        _.isEmpty(dataSource) || (
                            <Pagination showSizeChanger={false}
                                pageSize={6}
                                onChange={this.handleChange}
                                total={total}
                            />
                        )
                    }
                </div>
                <div className={styles['hot-right']}>
                    <HotTag />
                </div>
            </div>
        )
    }
}

export default Hot;
