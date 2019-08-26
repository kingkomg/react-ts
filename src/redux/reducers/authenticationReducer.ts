import {Constants} from "../Constants";
import {AuthenticationState} from "../State";

const authentication = (
  authentication: AuthenticationState = {user: '', token: ''},
  action: { type: string, payload: {user: string, token: string} }): AuthenticationState => {

  if(action.type === Constants.AUTH_SUCCESS){
    return action.payload;
  } else {
    return authentication;
  }
};

export default authentication;
