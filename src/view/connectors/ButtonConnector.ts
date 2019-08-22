import {connect} from "react-redux";
import Button, {ButtonDataProps, ButtonEventProps, ButtonProps} from "../components/Button/Button";
import {Dispatch} from "redux";
import {request_increment} from "../../redux/actions/CounterActions";

// const mapStateToProps = (label: string, ownProps: ButtonProps): ButtonDataProps => ({
//   label: ''
// });

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ButtonProps): ButtonEventProps => {
  const {onClick} = ownProps;
  // console.log(onClick.name);
  return {
    onClick: () => dispatch(request_increment())
  };
};

export default connect(undefined, mapDispatchToProps)(Button);
