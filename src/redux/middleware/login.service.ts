import {Middleware} from 'redux'
import {Constants} from "../Constants";
import {loggingIn, loginSuccess} from "../actions/LoginActions";

export const loginService = (deps: {}): Middleware => store => next => async action => {
  const nextAction = next(action);
  if (action.type === Constants.REQUEST_LOGIN) {
    store.dispatch(loggingIn());
    await new Promise(resolve => setTimeout(resolve, 2000));
    store.dispatch(loginSuccess());
  }
  return nextAction;
};
