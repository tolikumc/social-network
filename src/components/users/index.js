import React from 'react';


const Users = (props) => {

    // props.setUsers([
    //     {
    //         id: 1,
    //         photoUrl: '',
    //         fullName: 'Ivan',
    //         status: 'I am a boss',
    //         location: {city: 'Lviv', country: 'Ukraine'},
    //         followed: true
    //     },
    //     {
    //         id: 2,
    //         photoUrl: '',
    //         fullName: 'Tolik',
    //         status: 'I am boss too',
    //         location: {city: 'Kyiv', country: 'Ukraine'},
    //         followed: true
    //     },
    //     {
    //         id: 3,
    //         fullName: 'Svyat',
    //         photoUrl: '',
    //         status: 'I am devil',
    //         location: {city: 'Serpanok', country: 'Ukraine'},
    //         followed: false
    //     }
    //     ]);


    const onUnfollow = (userID) => {
        props.unfollow(userID)
    };

    const onFollow = (userID) => {
        props.follow(userID)
    };

    return (
        <div>
            {
                props.users.map((user) =>
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photo} alt="avatar"/>
                            </div>
                            <div>
                                {user.followed ? <button onClick={onUnfollow(user.id)}>Unfollow</button> :
                                    <button onClick={onFollow(user.id)}>Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.city}</div>
                                <div>{user.location.country}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
};

export default Users;
