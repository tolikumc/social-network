import React from 'react';
import * as axios from 'axios'
import userPhoto from '../../static/img/avatar.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount)
        });
    }

    onPageChange = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
        });
    };


    render() {
        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {
                        pages.map((el) => <span
                            className={this.props.currentPage === el ? 'selected_pagination_item' : 'pagination_item'}
                            onClick={()=>this.onPageChange(el)}>{el}</span>)
                    }
                </div>
                {
                    this.props.users.map((user) =>
                        <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar"/>
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> :
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
