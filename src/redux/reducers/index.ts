import counterReducer from "./counter.reducer";
import authenticationReducer from "./authentication.reducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
  counterReducer, authenticationReducer
});

export default allReducers;
