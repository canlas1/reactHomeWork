// Include React
import React, { Component } from 'react';

class GrandChild1 extends Component {
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Grandchild #1</h3>
        </div>
        <div className="panel-body">
          I'm grandchild 1!
        </div>
      </div>
    )
  }
}

export default GrandChild1;
