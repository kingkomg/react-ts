import {Middleware} from 'redux'
import {Constants} from "../Constants";
import {decrement, increment} from "../actions/CounterActions";

export const counterMiddleware = (deps:{}):Middleware => store => next => action => {
  const nextAction = next(action);
  switch (action.type) {
    case Constants.REQUEST_INCREMENT:
      store.dispatch(increment());
      break;
    case Constants.REQUEST_DECREMENT:
      store.dispatch(decrement());
      break;
  }
  return nextAction;
};
