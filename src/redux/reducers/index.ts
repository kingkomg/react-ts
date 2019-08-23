import counterReducer from "./counter.reducer";
import authenticationReducer from "./authentication.reducer";
import {combineReducers} from "redux";
import login from "./loginReducer";

const allReducers = combineReducers({
  counterReducer, authenticationReducer, login
});

export default allReducers;
