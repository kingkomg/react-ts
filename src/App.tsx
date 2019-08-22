import * as React from 'react';
import * as styles from './App.css';
import {request_increment} from "./redux/actions/CounterActions";
import Button from "./view/connectors/ButtonConnector";

const App: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.App}> Hello World</div>
      <Button label="+" onClick={request_increment}/>
    </>
  );
};

export default App;
