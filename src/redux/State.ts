export type LoginState = {
  name: string;
  password: string;
  error: string;
  loggingIn: boolean;
  loggedIn: boolean;
}

export type AuthenticationState = {
  user: string;
  token: string;
}

export type RouterState = {
  route: string
}

type State = {
  authentication: AuthenticationState;
  login: LoginState;
  router: RouterState;
}

export {State as default };
