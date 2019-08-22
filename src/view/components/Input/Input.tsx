import * as React from 'react';

export type InputPartialDataProps = {
  value: string;
}

export type InputDataProps = InputPartialDataProps & {
  type:string;
  name: string;
}

export type InputEventProps = {
  onChange: React.EventHandler<React.ChangeEvent>;
}

export type InputProps = InputDataProps & InputEventProps;

const Input: React.FunctionComponent<InputProps> = props => {
  const {type, name, value, onChange} = props;
  return (
    <input type={type} onChange={onChange} name={name} value={value}/>
  );
};

export default Input;
