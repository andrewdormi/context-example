import React, {Component} from 'react';

const UserContext = React.createContext('user');

class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            setUser: this.setUser.bind(this)
        };
    }

    setUser(user) {
        this.setState({user});
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default {Provider: UserProvider, Consumer: UserContext.Consumer};
