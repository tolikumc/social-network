const FOLLOW_FOR_NEW_USER = 'FOLLOW_FOR_NEW_USER';
const UNFOLLOW_FOR_USER = 'UNFOLLOW_FOR_USER';
const SET_USER = 'SET_USER';


const initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: '',
        //     fullName: 'Ivan',
        //     status: 'I am a boss',
        //     location: {city: 'Lviv', country: 'Ukraine'},
        //     followed: true
        // },
        // {
        //     id: 2,
        //     photoUrl: '',
        //     fullName: 'Tolik',
        //     status: 'I am a boss too',
        //     location: {city: 'Kyiv', country: 'Ukraine'},
        //     followed: true
        // },
        // {
        //     id: 3,
        //     fullName: 'Svyat',
        //     photoUrl: '',
        //     status: 'I am devil',
        //     location: {city: 'Serpanok', country: 'Ukraine'},
        //     followed: false
        // },
    ]

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                users: [...action.users, ...state.users]
            };
        case FOLLOW_FOR_NEW_USER:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return {...user}
                })
            };

        case UNFOLLOW_FOR_USER:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return {...user}
                })
            };
        default:
            return state;
    }

};


export const followActionCreator = (userID) => {
    return {type: FOLLOW_FOR_NEW_USER, userID}
};
export const unfollowActionCreator = (userID) => {
    return {
        type: UNFOLLOW_FOR_USER, userID
    }
};
export const setUsersActionCreate = (users) => {
    return {type: SET_USER, users}
};

export default usersReducer;
