import counterReducer from "./counter.reducer";
import authenticationReducer from "./authentication.reducer";
import {combineReducers} from "redux";
import inputReducer from "./inputReducer";

const allReducers = combineReducers({
  counterReducer, authenticationReducer, inputReducer
});

export default allReducers;
