import Users from "./index";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreate, unfollowActionCreator} from "../../redux/user-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowActionCreator(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreate(users))
        }

    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
