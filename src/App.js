import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Body from './Body/body'
import Header from './Header/header'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='contact/'>

          </Route>
          <Route exact path='gallery/'>

          </Route>
          <Route exact path='about/'>
          </Route>
          <Route exact path='projects'></Route>
          <Route exact path='/' >
            <Body />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
