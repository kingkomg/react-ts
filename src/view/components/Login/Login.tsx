import * as React from 'react';
import Input from "../Input/Input";

export type LoginDataProps = {
  name: string;
  password: string;
  error: string;
  loggingIn: boolean;
  loggedIn: boolean;
}

export type LoginEventProps = {
  onChangeName: Function;
  onChangePassword: Function;
  onLoginClick: React.EventHandler<React.MouseEvent>;
  onLogoutClick: React.EventHandler<React.MouseEvent>;
}

export type LoginProps = LoginDataProps & LoginEventProps;

const Login: React.FunctionComponent<LoginProps> = props => {
  const {
    name, password, error,
    loggingIn, loggedIn,
    onChangeName, onChangePassword, onLoginClick, onLogoutClick
  } = props;
  return (
    <>
      <h1>Login{loggingIn == true ? ' (logging in)' : ''}{loggedIn == true ? ' (logged in)' : ''}</h1>
      {error ? <span>{error}</span> : <></>}
      <Input value={name} type="text" name="name" onChange={onChangeName}/>
      <Input value={password} type="password" name="password" onChange={onChangePassword}/>
      <button onClick={onLoginClick}>Login</button>
      <button onClick={onLogoutClick}>Logout</button>
    </>
  );
};

export default Login;
