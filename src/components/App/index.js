import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from 'redux/store';
import FrontPage from '../Frontpage/FrontPage';
import Visual from '../Visual/Visual';
import Home from 'Home';


const store = configureStore();
const supportsHistory = 'pushState' in window.history;

export default function App() {
  return (

    <Provider store={store}>

      <ConnectedRouter
        forceRefresh={!supportsHistory}
        history={history}>
  
        <Switch>
          <Route path="/FrontPage" exact component={FrontPage} />
          <Route path="/Home" component={Home} />
          <Route path="/Visual" component={Visual} />
          <Redirect to="/FrontPage" />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}
