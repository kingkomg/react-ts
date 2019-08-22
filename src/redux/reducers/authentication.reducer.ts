import {Constants} from "../Constants";

const authenticationReducer = (loggedIn: boolean = false, action: { type: string }): boolean => {
  switch (action.type) {
    case Constants.LOGIN:
      return true;
    case Constants.LOGOUT:
      return false;
    default:
      return loggedIn;
  }
};

export default authenticationReducer;
