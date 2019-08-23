import * as React from 'react';

export type InputPartialDataProps = {
  value: string;
}

export type InputDataProps = InputPartialDataProps & {
  type:string;
  name: string;
}

export type InputEventProps = {
  onChange: Function;
}

export type InputProps = InputDataProps & InputEventProps;

const createOnChangeHandler = (callback: Function): React.EventHandler<React.ChangeEvent> => event => {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  callback( value );
};

const Input: React.FunctionComponent<InputProps> = props => {
  const {type, name, value, onChange} = props;
  return (
    <input type={type} onChange={createOnChangeHandler(onChange)} name={name} value={value}/>
  );
};

export default Input;
