import { UPDATE_FORECAST } from "../types";

const initialState = {
  forecast: "",
};

export const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORECAST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
