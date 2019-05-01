import axios from 'axios';

class Auth {
  constructor() {
    this.auth = axios.create({
      // TODO poner en .env
      baseURL: process.env.REACT_APP_URL,
      withCredentials: true,
    });
  }

  signup(user) {
    const { username, password } = user;
    return this.auth
      .post('/auth/signup', { username, password })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth
      .post('/auth/login', { username, password })
      .then(({ data }) => {
        console.log(data);
        return data
      });
  }

  logout() {
    return this.auth.post('/auth/logout', {}).then(response => response.data);
  }

  me() {
    return this.auth.get('/auth/me').then(response => response.data);
  }
}

const auth = new Auth();

export default auth;
