import axios from "axios";

class Xhr {
  constructor() {
    this.http = axios.create();
  }

  get(path, config) {
    return this.http.get(path, config);
  }
}

export default new Xhr();
