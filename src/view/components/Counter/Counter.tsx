import * as React from 'react';
import Button from "../../components/Button/Button";

export type CounterDataProps = {
  count: number;
}

export type CounterEventProps = {
  onIncrement: React.EventHandler<React.MouseEvent>;
  onDecrement: React.EventHandler<React.MouseEvent>;
}

export type CounterProps = CounterDataProps & CounterEventProps;

const Counter: React.FunctionComponent<CounterProps> = props => {
  const {count, onIncrement, onDecrement} = props;
  return (
    <>
      <h1>{count}</h1>
      <Button label="+" onClick={onIncrement}/>
      <Button label="-" onClick={onDecrement}/>
    </>
  );
};

export default Counter;
