import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage';
import ProjectsPage from '../ProjectsPage';
import SingleProject from '../SingleProject';
import ContactPage from '../ContactPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/projects/" component={ProjectsPage} />
    <Route path="/contact/" component={ContactPage} />
    <Route path="/projects/:id" component={SingleProject} />
    <Route component={HomePage} />
  </Switch>
);
export default App;

