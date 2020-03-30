import React, {Component} from 'react'
import './AdminNav.css';
import {
    Sidebar,
    Menu,
    Icon
} from 'semantic-ui-react'
import history from "../../../Routes/History";

export default class AdminNav extends Component {
    state = {
        animation: 'overlay',
        direction: 'left',
        dimmed: false,
        visible: false,
    };

    render() {
        return (
            <Sidebar
                className='SideNav'
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'
            >
                <Menu.Item as='a' onClick={() => history.push('/admin/dashboard')}>
                    <Icon name='dashboard'/>
                    Dashboard
                </Menu.Item>
                <Menu.Item as='a' onClick={() => history.push('/admin/network')}>
                    <Icon name='globe'/>
                    Networks
                </Menu.Item>
                <Menu.Item as='a' onClick={() => history.push('/admin/wifi')}>
                    <Icon name='wifi'/>
                    Wifi
                </Menu.Item>
                <Menu.Item as='a' onClick={() => history.push('/admin/configure')}>
                    <Icon name='cog'/>
                    Configure
                </Menu.Item>
                <Menu.Item as='a' onClick={() => history.push('/admin/diagnostic')}>
                    <Icon name='box'/>
                    Diagnostic
                </Menu.Item>
            </Sidebar>
        );
    };
};
