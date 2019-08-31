const FOLLOW_FOR_NEW_USER = 'FOLLOW_FOR_NEW_USER';
const UNFOLLOW_FOR_USER = 'UNFOLLOW_FOR_USER';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';

const initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1


};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                users: action.users,
            };
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.total,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
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
export const setTotalUsersCountActionCreate = (total) => {
    return {type: SET_TOTAL_USER_COUNT, total}
};
export const setCurrentPageActionCreate = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
};

export default usersReducer;
