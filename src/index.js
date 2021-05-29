import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import createStore  from './store';
import EmployeeList from './EmployeeList';
import { BrowserRouter as Router, Route, Switch }
                    from 'react-router-dom';
//author Akshay Jadhav 29/05/2021

ReactDOM.render(
  <Router>
    <Provider store={createStore}>
        <Switch> 
          <Route exact path='/' 
              component={App}>
          </Route> 
          <Route exact path='/employeeList'
              component={EmployeeList}>
          </Route> 
        </Switch>
    </Provider> 
  </Router>,
  document.getElementById('root')
);

