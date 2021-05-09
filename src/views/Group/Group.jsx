import React, { Component } from 'react';
import { Pagination } from 'antd';
import _ from 'lodash';
import { apiOK } from 'utils/utils';
import { fetchGroupList } from 'network/services';
import GroupItem from 'components/GroupItem';
import HotTag from 'components/HotTag';
import styles from './Group.module.less';
class Group extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            dataSource: [],
        }
    }

    fetchGroup = async (params = { pageNo: 1, pageSize: 6 }) => {
        const resp = await fetchGroupList(params);
        if(apiOK(resp)) {
            const { data } = resp;
            this.setState({ dataSource: data.records, total: data.total });
        }
    }

    componentDidMount() {
        this.fetchGroup();
    }

    handleClick = (detail) => {
        const { history } = this.props;
        history.push({
            pathname: '/detail',
            state: { detail }
        });
    }

    handleChange = async (current, pageSize) => {
        this.fetchGroup({ pageNo: current, pageSize });
    }

    render() {
        const { dataSource, total } = this.state;
        return (
            <div className={styles['group-wrap']}>
                <div className={styles['group-left']}>
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
                                showQuickJumper={true}
                                onChange={this.handleChange}
                                total={total}
                            />
                        )
                    }
                </div>
                <div className={styles['group-right']}>
                    <HotTag />
                </div>
            </div>
        )
    }
}

export default Group;
