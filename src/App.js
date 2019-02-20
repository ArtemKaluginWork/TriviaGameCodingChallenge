import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './redux';
import Home from './views/Home';
import Question from './views/Question';
import Result from './views/Result';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/question/:id" component={Question} />
        <Route path="/result" component={Result} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
