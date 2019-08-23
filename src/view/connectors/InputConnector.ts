import {connect} from "react-redux";
import Input, {InputEventProps, InputPartialDataProps} from "../components/Input/Input";
import {Dispatch} from "redux";
import {State} from "../../redux/State";
import {changeName} from "../../redux/actions/LoginActions";

const mapStateToProps = (state: State): InputPartialDataProps => ({
  value: state.inputReducer
});

const mapDispatchToProps = (dispatch: Dispatch): InputEventProps => {
  return {
    onChange: (value: string) => dispatch(changeName(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
