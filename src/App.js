import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Projects from './containers/Projects.jsx'
import Courses from './containers/Courses.jsx'
import Sessions from './containers/Sessions.jsx'
import Home from './containers/Home.jsx'
import Navbar from './componets/Navbar.jsx'
import './assets/App.css'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div>
        <Switch>
          <Route path="/projects" component={Projects}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/sessions" component={Sessions}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
