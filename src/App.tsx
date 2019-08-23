import * as React from 'react';
import * as styles from './App.css';
import Button from "./view/connectors/ButtonConnector";
import Input from "./view/connectors/InputConnector";

const App: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.App}> Hello World</div>
      <Button label="+"/>
      <Input type="text" name="name"/>
    </>
  );
};

export default App;
