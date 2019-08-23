export type State = {
  authenticationReducer: {
    token: string;
    loggingIn: boolean;
    loggedIn: boolean;
  };
  login: {
    name: string;
    password: string;
    error: string;
    loggingIn: boolean;
    loggedIn: boolean;
  };
  counterReducer: number;
  inputReducer: string;
}
