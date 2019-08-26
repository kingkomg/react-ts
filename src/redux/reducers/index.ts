import authentication from "./authenticationReducer";
import {combineReducers} from "redux";
import login from "./loginReducer";

const allReducers = combineReducers({
  authentication, login
});

export default allReducers;
