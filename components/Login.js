import React, {Component} from 'react';
import {withContextProvider, withContextConsumer} from '../utils/contexts';
import LoginContext from '../contexts/Login';

@withContextProvider(LoginContext.Provider)
@withContextConsumer(LoginContext.Consumer)
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    render() {
        const {login, loginErrors} = this.props;

        return (
            <div>
                <div>Login to The Seven Kingdoms</div>
                <input placeholder="Login" onChange={e => this.setState({login: e.target.value})} />
                <input placeholder="Password" onChange={e => this.setState({password: e.target.value})} />
                <button onClick={() => login(this.state)}>Login</button>
                {loginErrors.map((e, i) => <div key={i}>{e}</div>)}
            </div>
        );
    }
}

export default Login;