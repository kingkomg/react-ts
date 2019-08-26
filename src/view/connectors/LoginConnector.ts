import {connect} from "react-redux";
import {Dispatch} from "redux";
import State from "../../redux/State";
import Login, {LoginDataProps, LoginEventProps} from "../components/Login/Login";
import {changeName, changePassword, logout, requestLogin} from "../../redux/actions/LoginActions";

const mapStateToProps = (state: State): LoginDataProps => ({
  ...state.login
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
