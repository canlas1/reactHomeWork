// Include React
import React, { Component } from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import Search from './children/Search';
import Results from './children/Results';
import Saved from './children/Saved';

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="container">
            <div className="jumbotron">
            <div className ="well"></div>
              <h2><strong>NYT React HomeWork</strong></h2>
              <p><em>Grab that Article with React</em></p>
              <hr />
              <p>
                <Link to="/Search"><button className="btn btn-primary btn-lg">Search NY Times Arcticle</button></Link>
                <Link to="/Results"><button className="btn btn-danger btn-lg">Results of Search</button></Link>
                <Link to="/Saved"><button className="btn btn-danger btn-lg">Save that Bitch</button></Link>
              </p>
            </div>
            <div className="row">
              <Route path="/Search" component={Search}/>
              <Route path="/Results" component={Results}/>
              <Route path="/Saved" component={Saved}/>
            </div>
        </div>
      </Router>
    );
  }
}

export default Main;
