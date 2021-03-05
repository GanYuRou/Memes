import React, { Component } from 'react';
import { Modal } from 'antd';

const ModalWrapper = (ModalWrapper) => {
    return class extends Component {

        constructor(props) {
            super(props);
            this.state = { visible: true }
        }

        onCancel = () => {
            this.setState({ visible: false });
        }

        render() {
            const { title, footer = null, ...resProps } = this.props;
            const { visible } = this.state;
            return (
                <Modal title={title}
                    footer={footer}
                    visible={visible}                  
                    onCancel={this.onCancel}
                >
                    <ModalWrapper {...resProps} />
                </Modal>
            );
        }
    }
}

export default ModalWrapper;
