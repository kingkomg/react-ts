import {connect} from "react-redux";
import {Dispatch} from "redux";
import {decrement, increment} from "../../redux/actions/CounterActions";
import {State} from "../../redux/State";
import Counter, {CounterDataProps, CounterEventProps} from "../components/Counter/Counter";

const mapStateToProps = (state: State): CounterDataProps => ({
  count: state.counterReducer
});

const mapDispatchToProps = (dispatch: Dispatch): CounterEventProps => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
