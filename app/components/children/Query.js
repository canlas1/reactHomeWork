// Include React
import React, { Component } from 'react';

class Query extends React.Component {
	
	// SET INITIAL STATE
	constructor(props) {
		super(props);
		this.state = {term: ""}
	}

	handleChange(event) {

        this.setState({term: event.target.value});

    }

    // When a user submits...
    handleSubmit(event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();

        // Set the parent to have the search term
        this.props.setTerm(this.state.term);
        this.setState({term: ""});
    }

    // Here we describe this component's render method
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Query</h3>
                </div>
                <div className="panel-body text-center">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <h4 className="">
                                <strong>Location</strong>
                            </h4>

                            {/*
                             Note how each of the form elements has an id that matches the state.
                             This is not necessary but it is convenient.
                             Also note how each has an onChange event associated with our handleChange event.
                             */}
                            <input
                                value={this.state.term}
                                type="text"
                                className="form-control text-center"
                                id="term"
                                onChange={this.handleChange.bind(this)}
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

export default Query;