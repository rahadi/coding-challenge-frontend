export const GET_AGENTS_REQUEST = "GET_AGENTS_REQUEST";
export const GET_AGENTS_SUCCESS = "GET_AGENTS_SUCCESS";
export const GET_AGENTS_ERROR = "GET_AGENTS_ERROR";

export const getAgentsRequest = () => ({
  type: GET_AGENTS_REQUEST,
  payload: {},
});

export const getAgentsSuccess = (agents) => ({
  type: GET_AGENTS_SUCCESS,
  payload: agents,
});

export const getAgentsError = (error) => ({
  type: GET_AGENTS_ERROR,
  payload: { error },
});
