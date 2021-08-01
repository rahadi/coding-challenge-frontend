import xhr from "./xhr";

class ApiClient {
  constructor() {
    this.endpoints = {
      logs: `${process.env.REACT_APP_API_URL}/logs`,
      agents: `${process.env.REACT_APP_API_URL}/agents`,
      resolutions: `${process.env.REACT_APP_API_URL}/resolutions`,
    };
  }

  async fetchLogs() {
    return await xhr.get(this.endpoints.logs);
  }
  async fetchAgents() {
    return await xhr.get(this.endpoints.agents);
  }
  async fetchResolutions() {
    return await xhr.get(this.endpoints.resolutions);
  }
}

export default Object.freeze(new ApiClient());
