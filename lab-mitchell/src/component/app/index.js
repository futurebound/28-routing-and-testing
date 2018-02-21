import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'; //allows us to define specific routes that we want, switch to different routes without reloading the application
import Dashboard from '../dashboard/index';
import Landing from '../landing/index';

class App extends React.Component {
  render() {
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    ); 
  }
};

export default App;