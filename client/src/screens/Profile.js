import React from 'react';
import Header from '../component/Header';

class Profile extends React.Component {
    state = {profile: null}
    componentDidMount() {
        fetch("http://localhost:3001/users/profile", {credentials: 'include',
    
     })
        .then(res => res.json())
        .then(res => {
             this.setState({ profile: res })
             console.log(res)
        })
        .catch(err => err);
    }
    render() {
        return (
            <div>
            <Header title="Profile" />
            {this.state.profile && (
                <div>
                    <h4>{this.state.profile.FirstName} {this.state.profile.LastName}</h4>
                </div>
            )}
            <h2></h2>
        </div>
        )
    }
}

export default Profile;
