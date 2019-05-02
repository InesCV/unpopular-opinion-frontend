import axios from 'axios';

class Opinion {
  constructor() {
    this.opinionConnect = axios.create({
      baseURL: process.env.REACT_APP_URL,
      withCredentials: true,
    });
  }

  all() {
    return this.opinionConnect
      .get("opinions")
      .then(({ data }) => data)
  }

  create(opinion) {
    return this.opinionConnect
      .post("opinions", opinion)
      .then(({ data }) => data)
  };

  categories() {
    return this.opinionConnect
      .get("opinions/categories")
      .then(({ data }) => data)
  }

  response(response) {
    return this.opinionConnect
      .post("opinions/response", response)
      .then(({ data }) => data)
  }
}

const opinionService = new Opinion();

export default opinionService;
