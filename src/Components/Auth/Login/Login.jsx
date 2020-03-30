import React from 'react'
import {Button, Form, Image} from "semantic-ui-react";
import history from "../../../Routes/History";

import './Login.css';

class AuthLogin extends React.Component {

    state = {
        loading: false
    };

    constructor(props) {
        super(props);
        this.showMessage = props.showMessage;
    }

    doLogin = (event) => {
        this.setState({loading: true});

        setTimeout(() => {
            this.showMessage('Success', `Welcome, ${this.state.username}`, 'success', 2);
            history.push('/admin/dashboard');
        }, 2000);

        event.preventDefault();
    };

    onUpdateForm = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render = () => {
        return (
            <Form className='Form' onSubmit={this.doLogin} loading={this.state.loading}>
                <div className='FormImage'>
                    <Image src='/logo192.png' size='small'/>
                </div>
                <Form.Field>
                    <label>Username</label>
                    <input type='text' name='username' onChange={this.onUpdateForm}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type='password' name='password' onChange={this.onUpdateForm}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}

export default AuthLogin;
