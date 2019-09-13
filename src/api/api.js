import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a30a7578-4a93-4950-902b-74a89aa7de7a'
  }
});

const getDataFromRes = res => res.data;

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(getDataFromRes);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then(getDataFromRes);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(getDataFromRes);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(getDataFromRes);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/`, { status });
  }
};

export const authAPI = {
  auth() {
    return instance.get(`auth/me`).then(getDataFromRes);
  }
};
