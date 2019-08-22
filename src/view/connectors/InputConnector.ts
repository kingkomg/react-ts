import {connect} from "react-redux";
import Input, {InputEventProps, InputPartialDataProps, InputProps} from "../components/Input/Input";
import {Dispatch} from "redux";
import {changeName} from "../../redux/actions/CounterActions";

const mapStateToProps = (value: string, ownProps: InputProps): InputPartialDataProps => ({
  value: ownProps.value
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: InputProps): InputEventProps => {
  const {onChange} = ownProps;
  console.log(onChange);
  return {
    onChange: () => dispatch(changeName())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
