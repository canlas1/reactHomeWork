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

    return (<div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Query</h3>
                </div>
                <div className="panel-body text-center">
                    <form onSubmit={this.runQuery.bind(this)}>
                        <div className="form-group">
                            <h4 className="">
                                <strong>Location</strong>
                            </h4>

                            {/*
                             Note how each of the form elements has an id that matches the state.
                             This is not necessary but it is convenient.
                             Also note how each has an onChange event associated with our setQuery event.
                             */}
                            <input
                                value={this.state.term}
                                type="text"
                                className="form-control text-center"
                                id="term"
                                onChange={this.setQuery.bind(this)}
                                required
                            />
                            <br />
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Search;