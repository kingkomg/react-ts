import * as React from 'react';
import * as styles from './App.css';
import {changeName, request_increment} from "./redux/actions/CounterActions";
import Button from "./view/connectors/ButtonConnector";
import Input from "./view/connectors/InputConnector";

const App: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.App}> Hello World</div>
      <Button label="+" onClick={request_increment}/>
      <Input value="" type="text" name="name" onChange={changeName}/>
    </>
  );
};

export default App;
