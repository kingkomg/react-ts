import {LOGIN, LOGOUT} from "../Constants";

const authenticationReducer = (loggedIn: boolean = false, action: { type: string }): boolean => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return loggedIn;
  }
};

export default authenticationReducer;
