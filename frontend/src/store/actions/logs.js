export const GET_LOGS_REQUEST = "GET_LOGS_REQUEST";
export const GET_LOGS_SUCCESS = "GET_LOGS_SUCCESS";
export const GET_LOGS_ERROR = "GET_LOGS_ERROR";

export const getLogsRequest = () => ({
  type: GET_LOGS_REQUEST,
  payload: {},
});

export const getLogsSuccess = (user) => ({
  type: GET_LOGS_SUCCESS,
  payload: user,
});

export const getLogsError = (error) => ({
  type: GET_LOGS_ERROR,
  payload: { error },
});
