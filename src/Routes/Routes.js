import React, {Component} from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import history from './History';

import LoginLayout from "../Components/Layout/LoginLayout/LoginLayout";
import AuthLogin from "../Components/Auth/Login/Login";

import AppLayout from "../Components/Layout/AppLayout/AppLayout";
import Dashboard from "../Components/Admin/Dashboard/Dashboard";
import Diagnostic from "../Components/Admin/Dianogstic/Diagnostic";
import Configure from "../Components/Admin/Configure/Configure";
import Wifi from "../Components/Admin/Wifi/Wifi";
import Network from "../Components/Admin/Network/Network";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Redirect exact from="/" to="/auth/login"/>

                    <Route path="/auth/login" component={LoginLayout(AuthLogin, this.props)}/>

                    <Route path="/admin/dashboard" exact component={AppLayout(Dashboard, this.props)}/>
                    <Route path="/admin/network" exact component={AppLayout(Network, this.props)}/>
                    <Route path="/admin/wifi" exact component={AppLayout(Wifi, this.props)}/>
                    <Route path="/admin/diagnostic" exact component={AppLayout(Diagnostic, this.props)}/>
                    <Route path="/admin/configure" exact component={AppLayout(Configure, this.props)}/>
                </Switch>
            </Router>
        )
    }
}
