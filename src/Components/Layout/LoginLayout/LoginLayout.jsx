import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";

import './LoginLayout.css';

// import history from "../../../History";
import {Grid} from "semantic-ui-react";

export default function (Content, props = {app: {}}) {
    class LoginLayout extends React.Component {
        state = {app: props.app};
        showConfirmModal = props.showConfirmModal;
        showMessage = props.showMessage;

        componentDidMount() {

        }

        render() {
            return (
                <Router>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>&nbsp;</Grid.Column>
                            <Grid.Column width={10}>
                                <div className="Container">
                                    <div className="LoginContainer">
                                        <Content {...props}/>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}>&nbsp;</Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Router>
            );
        }
    }

    return LoginLayout;
};
