import React from 'react';
import * as axios from 'axios'
import userPhoto from '../../static/img/avatar.jpg'

class Users extends React.Component {

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsers(res.data.items)
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.getUser}>getUsers</button>
                {
                    this.props.users.map((user) =>
                        <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar"/>
                            </div>
                            <div>
                                {user.followed ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => this.props.follow(user.id)}>Follow</button>}

                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{'user.location.city'}</div>
                                <div>{'user.location.country'}</div>
                            </span>
                        </span>
                        </div>
                    )
                }
            </div>
        )
    };
}

export default Users;
