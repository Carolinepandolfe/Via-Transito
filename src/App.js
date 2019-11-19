import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feed from "./Components/Feed/Feed";
import Login from './Components/Login/Login';
import Info from "./Components/Info/Info";

class App extends React.Component {
  render (){

    return (
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Login}/>
              <Route path="/feed" component={Feed}/>
              <Route path="/info" component={Info}/>
            </Switch>
          </BrowserRouter>

    )
  }
}

export default App;
