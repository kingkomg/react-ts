import {connect} from "react-redux";
import Button, {ButtonEventProps} from "../components/Button/Button";
import {Dispatch} from "redux";
import {request_increment} from "../../redux/actions/CounterActions";

const mapDispatchToProps = (dispatch: Dispatch): ButtonEventProps => {
  return {
    onClick: () => dispatch(request_increment())
  };
};

export default connect(undefined, mapDispatchToProps)(Button);
