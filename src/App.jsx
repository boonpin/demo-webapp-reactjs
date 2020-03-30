import React from 'react';

import './App.css';

import {
    Button,
    Modal,
    Message,
} from 'semantic-ui-react'

import storageService from "./Services/Storage";
import Routes from "./Routes/Routes";

// TODO: hardcode
storageService.setLocalStorage('app_name', 'Access Point.');
storageService.setLocalStorage('powered_by', 'WITO Technology Sdn. Bhd.');

class App extends React.Component {
    app = {
        name: '',
        powered_by: ''
    };

    state = {
        modal_confirm: {open: false},
        message: {show: false}
    };

    messageTimer;

    constructor(props) {
        super(props);
        this.app.powered_by = storageService.getLocalStorage('powered_by');
        this.app.name = storageService.getLocalStorage('app_name');
    }

    showConfirmModal = (message, yes, no, close) => {
        this.setState({
            modal_confirm: {open: true, message, yes, no, close}
        })
    };

    showMessage = (title, message, type = 'error', seconds = 0) => {
        this.setState({
            message: {show: true, message, title, type}
        });
        if (seconds > 0) {
            clearTimeout(this.messageTimer);
            this.messageTimer = setTimeout(() => {
                this.setState({message: {show: false}})
            }, seconds * 1000)
        }
    };

    dismissMessage = () => {
        this.setState({message: {show: false}});
        if (this.messageTimer) {
            clearTimeout(this.messageTimer);
        }
    };

    render() {
        const {modal_confirm, message} = this.state;

        const msgHtml = message.show ? <div className="LayupUpperContainer">
            <Message className="MessageContainer"
                     positive={message.type === 'success'}
                     warning={message.type === 'warning'}
                     info={message.type === 'info'}
                     error={message.type === 'error'}
                     onDismiss={this.dismissMessage}
                     visible={message.show}
                     header={message.title}
                     content={message.message}
                     color={message.color}
            />
        </div> : '';

        return (
            <div>
                {msgHtml}

                <Routes app={this.app}
                        showMessage={this.showMessage}
                        showConfirmModal={this.showConfirmModal}/>

                <Modal size='tiny' open={modal_confirm.open} onClose={() => {
                    this.setState({modal_confirm: {open: false}});
                    if (modal_confirm.close) {
                        modal_confirm.close();
                    }
                }}>
                    <Modal.Header>Confirm</Modal.Header>
                    <Modal.Content>
                        <p>{modal_confirm.message}</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={() => {
                            this.setState({modal_confirm: {open: false}});
                            if (modal_confirm.no) {
                                modal_confirm.no();
                            }
                        }}>No</Button>
                        <Button positive onClick={() => {
                            this.setState({modal_confirm: {open: false}});
                            if (modal_confirm.yes) {
                                modal_confirm.yes();
                            }
                        }}
                        >Yes</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default App;
