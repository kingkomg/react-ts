import * as React from 'react';

export type ButtonDataProps = {
  label: string;
}

export type ButtonEventProps = {
  onClick: React.EventHandler<React.MouseEvent>;
}

export type ButtonProps = ButtonDataProps & ButtonEventProps;

const Button: React.FunctionComponent<ButtonProps> = props => {
  const {onClick, label} = props;
  return (
    <button onClick={onClick}>{label}</button>
  );
};

export default Button;
