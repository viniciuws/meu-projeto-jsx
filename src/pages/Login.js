import React, { Component } from 'react';
import { Input, Button} from 'reactstrap'
import { setLoggedIn } from '../utils/fake-login';
import { Prompt } from 'react-router-dom'

export default class Login extends Component {
    state = {
        formChanged: false
    }
    
    onLoginClick = () => {
        let previousPath = '/'
        previousPath = this.props.location.state.previousPath || {}
        setLoggedIn(true);
        this.props.history.push(previousPath)
    }
    onInputChange = () => {
        this.setState({
            formChanged: true
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>
                    <Input placeholder="Usuário" onChange={this.onInputChange} />
                    <br />
                    <Input placeholder="Senha" onChange={this.onInputChange} />
                    <br />
                    <Button color="primary" onClick={this.onLoginClick}>Entrar</Button>
                </div>
                <Prompt
                    when={this.state.formChanged}
                    message="Deseja descartar as modificações do usuário?"
                />
            </div>
        );
    }
}