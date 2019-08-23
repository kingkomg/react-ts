import {Constants} from "../Constants";

export const increment = () => {
  return {type: Constants.INCREMENT}
};
export const decrement = () => {
  return {type: Constants.DECREMENT}
};
export const request_increment = () => {
  return {type: Constants.REQUEST_INCREMENT}
};
export const request_decrement = () => {
  return {type: Constants.REQUEST_DECREMENT}
};
