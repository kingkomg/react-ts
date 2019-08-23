import * as React from 'react';
import * as styles from './App.css';
import Input from "./view/connectors/InputConnector";
import Counter from "./view/connectors/CounterConnector";

const App: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.App}> Hello World</div>
      <Input type="text" name="name"/>
      <Counter/>
    </>
  );
};

export default App;
