import React, {Component} from 'react';
import {withContextProvider, withContextConsumer} from '../utils/contexts';
import UserContext from '../contexts/User';
import Login from './Login';
import Profile from './Profile';

@withContextProvider(UserContext.Provider)
@withContextConsumer(UserContext.Consumer)
class App extends Component {
    render() {
        const {user} = this.props;
        if (!user) {
            return <Login />;
        }
        return <Profile user={user} />;
    }
}

export default App;