import React, {Component} from 'react';
import {withContextConsumer} from '../utils/contexts';
import UserContext from './User';

const LoginContext = React.createContext('login');

@withContextConsumer(UserContext.Consumer)
class LoginProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginErrors: [],
            login: this.login.bind(this)
        };
    }

    async login({login, password}) {
        if (login !== 'JonSnow' || password !== 'LoveDaenerys') {
            this.setState({loginErrors: ['Good try']});
            return;
        }
        this.props.setUser({name: 'Jon Snow', role: 'Bastard'});
    }

    render() {
        return (
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}

export default {Provider: LoginProvider, Consumer: LoginContext.Consumer};
