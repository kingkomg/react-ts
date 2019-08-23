import * as React from 'react';
import * as styles from './App.css';
import Counter from "./view/connectors/CounterConnector";
import Login from "./view/connectors/LoginConnector";

const App: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.App}> Hello World</div>
      <Counter/>
      <Login />
    </>
  );
};

export default App;
