import {Middleware} from 'redux'
import {REQUEST_DECREMENT, REQUEST_INCREMENT} from "../Constants";
import {decrement, increment} from "../actions/CounterActions";

export const counterMiddleware = (deps:{}):Middleware => store => next => action => {
  const nextAction = next(action);
  switch (action.type) {
    case REQUEST_INCREMENT:
      store.dispatch(increment());
      break;
    case REQUEST_DECREMENT:
      store.dispatch(decrement());
      break;
  }
  return nextAction;
};
