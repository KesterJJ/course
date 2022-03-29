import React from 'react';
import {Banner, Navbar} from './components';
import GlobalStyles from './GlobalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (

      <Router>
      <Navbar />
      <Banner />
      </Router>
    
  );
}

export default App;
