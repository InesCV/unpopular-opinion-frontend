import axios from 'axios';

class Opinion {
  constructor() {
    this.opinionConnect = axios.create({
      // TODO poner en el env.development 
      baseURL: 'http://localhost:5000',
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

  //TODO response
  respond(opinion) {

  }
}

const opinionService = new Opinion();

export default opinionService;
