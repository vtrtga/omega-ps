import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Infos from './pages/Infos';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
        <Route path="/infos/:id" component={Infos} />
      </Switch>
    </div>
  );
}

export default App;
