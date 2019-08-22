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
// export const changeName = (name: string) => {
//   return {type: Constants.CHANGE_NAME, payload: {name}}
// };
// export const changePassword = (password: string) => {
//   return {type: Constants.CHANGE_PASSWORD, payload: {password}}
// };
export const changeName = () => {
  return {type: Constants.CHANGE_NAME}
};
export const changePassword = () => {
  return {type: Constants.CHANGE_PASSWORD}
};
