import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from "react-redux";

import './AppLayout.css';

import AdminNav from "../AdminNav/AdminNav";

import history from "../../../Routes/History";


export default function (Content, props = {app: {}}) {

    class AppLayout extends React.Component {
        state = {app: props.app};
        showConfirmModal = props.showConfirmModal;
        showMessage = props.showMessage;

        componentDidMount() {

        }

        logout = () => {
            this.showConfirmModal('Confirm Logout?', () => {
                history.push('/auth/login');

                this.showMessage('Logout', 'success', 'success');
            });
        };

        render() {
            return (
                <Router>
                    <div className='SideNavContainer'>
                        <AdminNav/>
                    </div>
                    <div className='ContentContainer'>
                        <div className='Header'>
                            <div className="ui equal width grid">
                                <div className="three column">
                                    &nbsp;
                                </div>
                                <div className="ten wide column HeaderCenter">
                                    TITLE
                                </div>
                                <div className="three column HeaderRight">
                                    <div onClick={this.logout}>Logout</div>
                                </div>
                            </div>

                        </div>
                        <div className='Contents'>
                            <Content {...props}/>
                        </div>
                        <div className='Footer'>
                            Powered by <i><strong>{this.state.app.powered_by}</strong></i>
                        </div>
                    </div>
                </Router>
            );
        }
    }

    return AppLayout;
};
