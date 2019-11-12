import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feed from "./Components/Feed/Feed";
import Login from '../src/Components/Login/Login';

class App extends React.Component {
  render (){

    return (
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Login}/>
              <Route path="/feed" exact component={Feed}/>
            </Switch>
          </BrowserRouter>

    )
  }
}

export default App;
