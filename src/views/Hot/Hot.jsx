import React, { Component } from 'react';
import { Pagination } from 'antd';
import _ from 'lodash';
import { becomeRandom, fetchHotList } from 'network/services';
import GroupItem from 'components/GroupItem';
import HotTag from 'components/HotTag';
import styles from './Hot.module.less';

class Hot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            total: 0
        }
    }

    async componentDidMount() {
        const resp = await fetchHotList({ pageNo: 1, pageSize: 6 });
        this.setState({ dataSource: resp.records, total: resp.total });
    }

    handleClick = (detail) => {
        const { history } = this.props;
        history.push({
            pathname: '/detail',
            state: { detail }
        });
    }

    handleChange = async (current, pageSize) => {
        const resp = await fetchHotList({ pageNo: current, pageSize });
        this.setState({ dataSource: resp.records, total: resp.total });
    }

    render() {
        const { dataSource, total } = this.state;
        return (
            <div className={styles['hot-wrap']}>
                <div className={styles['hot-left']}>
                    {
                        _.isEmpty(dataSource) || dataSource.map((item, index) => (
                            <GroupItem {...item}
                                key={index}
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
