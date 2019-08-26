import * as React from 'react';
import * as styles from './App.css';
import Login from "./view/connectors/LoginConnector";
import {RouterState} from "./redux/State";
import {connect} from "react-redux";


type AppProps = {
  route: string
}

const mapStateToProps = (state: RouterState): AppProps => ({
  route: state.route
});

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <>
      <div className={styles.App}> Hello World</div>
      <Login/>
    </>
  );
};

const AppConnected = connect(mapStateToProps)(App);
export default AppConnected;
