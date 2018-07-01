import { Switch, Route } from 'react-router-dom'
import {Home, Login} from '../Components';
import React from 'react';

export default class Main extends React.Component {
    render(){
      return (
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
          </Switch>
        </main>
      );
    }
}