import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
                <div>Name: {this.props.user.name}</div>
                <div>Role: {this.props.user.role}</div>
            </div>
        );
    }
}

export default Profile;