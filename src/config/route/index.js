import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {ClassComponent, FunctionComponent} from '../../pages'

const Index = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/class-component">
            <ClassComponent />
          </Route>
          <Route path="/function-component">
            <FunctionComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Index;
