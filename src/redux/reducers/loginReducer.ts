import {Constants} from "../Constants";
import {LoginState} from "../State";

const login = (
  login: LoginState = {name: '', password: '', error: '', loggingIn: false, loggedIn: false},
  action: { type: string, payload: string }): LoginState => {
  switch (action.type) {
    case Constants.CHANGE_NAME:
      return {
        ...login,
        name: action.payload
      };
    case Constants.CHANGE_PASSWORD:
      return {
        ...login,
        password: action.payload
      };
    case Constants.LOGGING_IN:
      return {
        ...login,
        loggedIn: false,
        loggingIn: true
      };
    case Constants.LOGIN_SUCCESS:
      return {
        name: '',
        password: '',
        error: '',
        loggedIn: true,
        loggingIn: false
      };
    case Constants.LOGOUT:
      return {
        name: '',
        password: '',
        error: '',
        loggedIn: false,
        loggingIn: false
      };
    case Constants.LOGIN_ERROR:
      return {
        ...login,
        error: action.payload
      };
    default:
      return login;
  }
};

export default login;
