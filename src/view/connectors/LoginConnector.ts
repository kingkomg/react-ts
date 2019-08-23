import {connect} from "react-redux";
import {Dispatch} from "redux";
import {State} from "../../redux/State";
import Login, {LoginDataProps, LoginEventProps} from "../components/Login/Login";
import {changeName, changePassword, logout, requestLogin} from "../../redux/actions/LoginActions";

const mapStateToProps = (state: State): LoginDataProps => ({
  name: state.login.name,
  password: state.login.password,
  error: state.login.error,
  loggingIn: state.login.loggingIn,
  loggedIn: state.login.loggedIn
});

const mapDispatchToProps = (dispatch: Dispatch): LoginEventProps => {
  return {
    onChangeName: (value: string) => dispatch(changeName(value)),
    onChangePassword: (value: string) => dispatch(changePassword(value)),
    onLoginClick: (event) => {
      event.preventDefault();
      dispatch(requestLogin());
    },
    onLogoutClick: (event) => {
      event.preventDefault();
      dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
