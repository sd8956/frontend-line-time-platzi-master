import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './containers/Home.jsx'
import Navbar from './componets/Navbar.jsx'
import './assets/App.css'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
