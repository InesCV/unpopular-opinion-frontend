import axios from 'axios';

class Statistics {
  constructor() {
    this.statisticsConnect = axios.create({
      baseURL: process.env.REACT_APP_URL,
      withCredentials: true,
    });
  }

  query(query) {
    return this.statisticsConnect
      .post('/statistics', query)
      .then(({ data }) => data)
  }
}

const statsService = new Statistics();

export default statsService;
