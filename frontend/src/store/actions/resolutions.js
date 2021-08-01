export const GET_RESOLUTIONS_REQUEST = "GET_RESOLUTIONS_REQUEST";
export const GET_RESOLUTIONS_SUCCESS = "GET_RESOLUTIONS_SUCCESS";
export const GET_RESOLUTIONS_ERROR = "GET_RESOLUTIONS_ERROR";

export const getResolutionsRequest = () => ({
  type: GET_RESOLUTIONS_REQUEST,
  payload: {},
});

export const getResolutionsSuccess = (resolutions) => ({
  type: GET_RESOLUTIONS_SUCCESS,
  payload: resolutions,
});

export const getResolutionsError = (error) => ({
  type: GET_RESOLUTIONS_ERROR,
  payload: { error },
});
