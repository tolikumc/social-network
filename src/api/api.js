import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a30a7578-4a93-4950-902b-74a89aa7de7a'
  }
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then(res => res.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(res => res.data);
  }
};
