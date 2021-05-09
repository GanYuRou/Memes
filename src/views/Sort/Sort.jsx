import React, { Component } from 'react';
import { Pagination } from 'antd';
import { apiOK } from 'utils/utils';
import _ from 'lodash';
import GroupItem from 'components/GroupItem';
import HotTag from 'components/HotTag';
import { fetchSortGroup } from 'network/services';
import styles from './Sort.module.less';

class Meme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            dataSource: [],
        }
    }

    handleClick = (detail) => {
        const { history } = this.props;
        history.push({
            pathname: '/detail',
            state: { detail }
        });
    }

    fetchGroup = async (params = { pageNo: 1, pageSize: 6 }) => {
        const resp = await fetchSortGroup(params);
        if (apiOK(resp)) {
            const { data } = resp;
            this.setState({ dataSource: data.records, total: data.total });
        }
    }

    handleChange = async (current, pageSize) => {
        this.fetchGroup({ pageNo: current, pageSize });
    }

    componentDidMount() {
        this.fetchGroup();
    }

    render() {
        const { dataSource, total } = this.state;

        return (
            <div className={styles['sort-wrap']}>
                <div className={styles['sort-left']}>
                    {
                        _.isEmpty(dataSource) || dataSource.map(item => (
                            <div className={styles['sort-item']}>
                                <div className={styles['sort-title']}>{item.name}</div>
                                <div>
                                    {
                                        item.groups.map(group => (
                                            <GroupItem {...group}
                                                key={group.code}
                                                onCkick={this.handleClick}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                    {
                        _.isEmpty(dataSource) || (
                            <Pagination showSizeChanger={false}
                                pageSize={6}
                                showQuickJumper={true}
                                onChange={this.handleChange}
                                total={total}
                            />
                        )
                    }
                </div>
                <div className={styles['sort-right']}>
                    <HotTag />
                </div>
            </div>
        )
    }
}

export default Meme;
