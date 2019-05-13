import axios from 'axios';

class User {
  constructor() {
    this.userConnect = axios.create({
      baseURL: process.env.REACT_APP_URL,
      withCredentials: true,
    });
  }

  user(id) {
    return this.userConnect
      .get(`users/${id}`)
      .then(({ data }) => data)
  };

  profile() {
    return this.userConnect
      .get(`users`)
      .then(({ data }) => data)
  }

  update(user) {
    return this.userConnect
      .put('users', user)
      .then(({ data }) => data)
  };
}

const userService = new User();

export default userService;
