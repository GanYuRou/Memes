import React, { Component } from 'react';
import { Pagination } from 'antd';
import { fetchGroupList } from 'network/services';
import GroupItem from './GroupItem';
import styles from './Group.module.less';
class Group extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        }
    }

    async componentDidMount() {
        const resp = await fetchGroupList({ pageNo: 1, pageSize: 6 });
        this.setState({dataSource: resp.data.records});
    }

    handleClick = (detail) => {
        const { history } = this.props;
        console.log(detail);
        history.push({
            pathname: '/detail',
            state: { detail }
        });
    }

    render() {
        const { dataSource } = this.state;
        return (
            <React.Fragment>
                <div className={styles['group']}>
                    {
                        dataSource && dataSource.map((item, index) => (
                            <GroupItem {...item}
                                key={index}
                                onClick={() => this.handleClick(item)}
                            />
                        ))
                    }
                </div>
                <div className={styles['group-footer']}>
                    <Pagination />
                </div>
            </React.Fragment>
        )
    }
}

export default Group;
