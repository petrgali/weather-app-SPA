import { UPDATE_LOCATION } from "../types";

export const updateLocation = (data) => ({
  type: UPDATE_LOCATION,
  payload: data,
});
