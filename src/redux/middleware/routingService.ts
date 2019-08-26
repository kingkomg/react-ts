import {Middleware} from 'redux'
import {Constants} from "../Constants";
import {loggingIn, loginSuccess} from "../actions/LoginActions";
import {Router} from "router5";

export const routingService = (deps: {router: Router}): Middleware => store => next => async action => {
  const nextAction = next(action);
  const {router} = deps;

  if (action.type === Constants.REQUEST_LOGIN) {

    store.dispatch(loggingIn());
    await new Promise(resolve => setTimeout(resolve, 2000));

  }
  return nextAction;
};
