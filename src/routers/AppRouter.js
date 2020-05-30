import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenceDashboardPage from '../components/ExpenceDashboardPage';
import AddExpencePage from '../components/AddExpencePage';
import EditExpancePage from '../components/EditExpancePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={ExpenceDashboardPage}/>
        <Route path="/create" component={AddExpencePage}/>
        <Route path="/edit/:id" component={EditExpancePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;