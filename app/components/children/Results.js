// Include React
import React from 'react';
// Include the helpers for making API calls
import helpers from "../../utils/helpers";

// Create the Results component
class Results extends React.Component {


  // Here we will save states for the contents we save
  getInitialState() {
    return {
      title: "",
      url: "",
      pubdate: ""
    };
  }

  // This code handles the sending of the Results terms to the parent Results component
  handleClick(search_terms) {

    console.log("CLICKED");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    console.log(search_terms);

    //axious to handle saved

    helpers.postSaved(
        search_terms.headline.main, 
        search_terms.pub_date, 
        search_terms.web_url
    ).then(function() {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
      console.log(search_terms.web_url);

    });
  }

  // A helper method for mapping through our articles and outputting some HTML
  renderArticles() {
    return this.props.results.docs.map(function(article, index) {

      // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{article.headline.main}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={article.web_url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Article</button>
                </a>

                {/*
                  By using an arrow function callback to wrap this.handleClick,
                  we can pass in an article as an argument
                */}
                <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Save</button>
              </span>
            </h3>
            <p>Date Published: {article.pub_date}</p>

          </li>

        </div>
      );

    }.bind(this));

  }

  // A helper method for rendering a container to hold all of our articles
  renderContainer() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-list-alt"></i>
                    Results
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderArticles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    // If we have no articles, render this HTML
    if (!this.props.results.docs) {
      return (
        <li className="list-group-item">
          <h3>
            <span>
              <em>Enter Results terms to begin...</em>
            </span>
          </h3>
        </li>
      );
    }
    // If we have articles, return this.renderContainer() which in turn, returns all the articles
    return this.renderContainer();
  }
};

// // Creating the Results component
// class Results extends React.Component {
//     // Here we render the function
//     render() {
//         return (
//             <div className="panel panel-default">
//                 <div className="panel-heading">
//                     <h3 className="panel-title text-center">Results</h3>
//                 </div>
//                 <div className="panel-body text-center">
//                     <h1>Address:</h1>
//                     <p>{this.props.address}</p>
//                 </div>
//             </div>
//         );
//     }
// }

// Export the component back for use in other files
export default Results