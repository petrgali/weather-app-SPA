import { UPDATE_LOCATION } from "../types";

const initialState = {
  location: "",
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
