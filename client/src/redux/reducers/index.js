import { combineReducers } from "redux";
import { forecastReducer } from "./forecastReducer";
import { locationReducer } from "./locationReducer";

const rootReducer = combineReducers({
  forecast: forecastReducer,
  location: locationReducer,
});
export default rootReducer;
