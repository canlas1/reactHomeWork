// Include React
import React from 'react';

// This is the Saved component. 
class Saved extends React.Component {
  // Here we describe this component's render method
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search Saved</h3>
        </div>
        <div className="panel-body text-center">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.saved.map(function(search, i) {
            return (
              <p key={i}>{search.location} - {search.date}</p>
            );
          })}
        </div>
      </div>
    );
  }
}


// Export the component back for use in other files
export default Saved;
