import { connect } from 'react-redux';
import React, { Component } from "react";

import { getFilteredLots, getSearching, hasSearchedOnce } from '../selectors'
import ResultsList from './sidebar/ResultsList';
import SearchingSpinner from './SearchingSpinner';

const mapStateToProps = state => {
  return {
    hasSearchedOnce: hasSearchedOnce(state),
    results: getFilteredLots(state),
    searching: getSearching(state),
  };
};

class ResultsPanel extends Component {
  render() {
    if (this.props.searching) {
      return (
        <SearchingSpinner />
      );
    } else {
      if (this.props.results.length === 0) {
        if (this.props.hasSearchedOnce) {
          return (
            <div className='results-panel-message'>No matching results. Please try another search.</div>
          );  
        } else {
          return (
            <div className='results-panel-message'>Search for properties to get started.</div>
          );
        }
      } else {
        return (
          <ResultsList />
        );
      }
    }
  }
}

export default connect(mapStateToProps)(ResultsPanel);
