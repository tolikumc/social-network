export const getUsers = state => {
  return state.usersReducer.users;
};
export const getPageSize = state => {
  return state.usersReducer.pageSize;
};
export const getTotalUserCount = state => {
  return state.usersReducer.totalUserCount;
};
export const getFetching = state => {
  return state.usersReducer.isFetching;
};
export const getFollowingProgress = state => {
  return state.usersReducer.followingInProgress;
};
export const getCurrentPage = state => {
  return state.usersReducer.currentPage;
};
