import React from 'react'
import userPhoto from "../../static/img/avatar.jpg";


export const Users = (props) => {

    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map((el) => <span
                        className={props.currentPage === el ? 'selected_pagination_item' : 'pagination_item'}
                        onClick={() => props.onPageChange(el)}>{el}</span>)
                }
            </div>
            {
                props.users.map((user) =>
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar"/>
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(user.id)}>Follow</button>}

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
