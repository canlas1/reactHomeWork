// Include React
import React, { Component } from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import Search from './children/Search';
import Saved from './children/Saved';
// import Query  from './children/Query';

class Main extends React.Component {
  render() {
    return (

      <Router> 
        <div className="container">
          <div className="jumbotron">
           
           <div className="row">
            <h2>
              <strong>NYT React HomeWork</strong>
            </h2>
               <p>
                  <em>Grab that Article with React</em>
                </p>

                 <Link to="/search">
                  <button className="btn btn-primary btn-lg">Search NY Times Arcticle
                  </button>
                 </Link>

            </div>
          </div>
          <div className="jumbotron">
          <div className="row">

            <Link to="/saved">
              <button className="btn btn-danger btn-lg">Save that Bitch
              </button>
            </Link> 
          </div>
          </div>

        <div className="container">
        <div className="row">
          <Route path="/search" component={Search}/>
          <Route path="/saved" component={Saved}/>
        
        </div>
        </div>
      </div>

      </Router>

        )
    }
}

export default Main;
