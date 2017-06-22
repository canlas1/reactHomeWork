// Include React
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import GrandChild1 from './grandchildren/GrandChild1';
import GrandChild2 from './grandchildren/GrandChild2';

class Child1 extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Child #1</h3>
            </div>
            <div className="panel-body">
              <p>I'm child 1!</p>
              <p>
                <Link to="/Child1/GrandChild1"><button className="btn btn-warning btn-sm">Show Grandchild #1</button></Link>
                <Link to="/Child1/GrandChild2"><button className="btn btn-success btn-sm">Show Grandchild #2</button></Link>
              </p>

              <Route path="/Child1/GrandChild1" component={GrandChild1} />
              <Route path="/Child1/GrandChild2" component={GrandChild2} />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Child1;
