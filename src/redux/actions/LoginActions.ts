import {Constants} from "../Constants";

export const changeName = (name: string) => {
  return {type: Constants.CHANGE_NAME, payload: name}
};
export const changePassword = (password: string) => {
  return {type: Constants.CHANGE_PASSWORD, payload: password}
};
export const requestLogin = () => {
  return {type: Constants.REQUEST_LOGIN}
};
export const loggingIn = () => {
  return {type: Constants.LOGGING_IN}
};
export const logout = () => {
  return {type: Constants.LOGOUT}
};
export const loginSuccess = () => {
  return {type: Constants.LOGIN_SUCCESS}
};
export const loginError = () => {
  return {type: Constants.LOGIN_ERROR}
};
