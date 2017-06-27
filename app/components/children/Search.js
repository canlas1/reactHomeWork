// Include React as a dependency
import React from "react";

// Include the Query and Results components
import Query from "./Query";
import Results from "./Results";

// Include the helpers for making API calls
import helpers from "../../utils/helpers";

// Create the Search component
class Search extends React.Component {

  //SET INITIAL STATE
   constructor(props) {
    super(props);
     this.state = {term: ""}
  }

  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  setQuery(newQuery, newStart, newEnd) {

    //axios helper to runQuery

    helpers.runQuery(newQuery, newStart, newEnd).then(

      function(data){

      this.setState({ results: { docs: data.docs } });
    }.bind(this));
  }

  // Render the component. Note how we deploy both the Query and the Results Components
  render() {
    console.log("Render Results", this.state.results);

    return (  
    <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <Query updateSearch={this.setQuery} />
        {/* Note how we pass in the results into this component */}
        <Results results={this.state.results} />
      </div>
    );
  }
};
// Export the component back for use in other files
export default Search;