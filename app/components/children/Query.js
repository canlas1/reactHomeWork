// Include React
import React, { Component } from 'react';

class Query extends React.Component {
	
	// SET INITIAL STATE
	getInitialState() {
    return {
      search: "",
      start: "",
      end: ""
    };
  }

//changes in textbox
	handleChange(event) {


		//create capture syntax

        this.setState({term: event.target.value});
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);

    }

    // When a user submits...
    handleSubmit(event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();
        console.log("CCLCLLLLLICCCKKKED")

        // Set the parent to have the search term
        this.props.updateSearch(
	        this.state.search, 
	    	this.state.start, 
	    	this.state.end
    	);
  }
    // Here we describe this component's render method
    render() {
        return (
            <div className="main-container">

        <div className="row">
          <div className="col-lg-12">

            <div className="jumbotron">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                     Query
                  </strong>
                </h1>
              </div>
              <div className="panel-body">

                {/* Note how we associate the text-box inputs with the state values */}
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4 className=""><strong>Topic</strong></h4>
                    <input
                      type="text"
                      value={this.state.search}
                      className="form-control"
                      id="search"
                      onChange={this.handleChange}
                      required
                    />

                    <h4><strong>Start Year</strong></h4>
                    <input
                      type="number"
                      value={this.state.start}
                      className="form-control"
                      id="start"
                      onChange={this.handleChange}
                      required
                    />

                    <h4><strong>End Year</strong></h4>

                    <input
                      type="number"
                      value={this.state.end}
                      className="form-control"
                      id="end"
                      onChange={this.handleChange}
                      required
                    />

                  </div>

                  {/* Here we create the onClick event that triggers the HandleSubmit */}
                  <div className="pull-right">
                    <button
                      type="submit"
                      className="btn btn-danger"
                    >
                      <h4>Submit</h4>
                    </button>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
};


export default Query;