import {DECREMENT, INCREMENT, REQUEST_DECREMENT, REQUEST_INCREMENT} from "../Constants";

export const increment = () => {
  return {type: INCREMENT}
};
export const decrement = () => {
  return {type: DECREMENT}
};
export const request_increment = () => {
  return {type: REQUEST_INCREMENT}
};
export const request_decrement = () => {
  return {type: REQUEST_DECREMENT}
};
