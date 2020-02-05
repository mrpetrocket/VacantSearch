import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchFilteredLots } from '../../actions';
import AcreageInput from './AcreageInput';
import BathSelect from './BathSelect';
import { getSearching } from '../../selectors'
import NeighborhoodSelect from './NeighborhoodSelect';

const mapStateToProps = state => {
  return {
    searching: getSearching(state),
  };
};

class SearchFilters extends Component {
  onSubmitSearchForm(event) {
    event.preventDefault();

    const { fetchFilteredLots } = this.props;

    // Get data from form
    const sidebarForm = document.getElementById('sidebar-form');
    const formData = new FormData(sidebarForm);
    const sqFtMin = formData.get('form-acres-min');
    const sqFtMax = formData.get('form-acres-max');
    const neighborhoods = [
      parseInt(formData.get('form-neighborhood')),
    ];
    const minBaths = formData.get('form-baths-min');
    const maxBaths = formData.get('form-baths-max');

    // Format api request
    const requestData = {
      "IncludePossible": true,
      "LotType": 3,  // 1 vacant lot, 2 vacant building, 3 both
      "Neighborhoods": neighborhoods,
      "NumBathsMax": maxBaths,
      "NumBathsMin": minBaths,
      "SqFtMin": sqFtMin,
      "SqFtMax": sqFtMax,
    };

    // Make the request
    fetchFilteredLots(requestData);
  }
  render() {
    return (
      <div className='header SearchFilters'>
        <form
          action="#"
          id="sidebar-form"
          onSubmit={(e) => this.onSubmitSearchForm(e)}
        >
          <NeighborhoodSelect />
          <label>Baths
            <BathSelect id="form-baths-min" defaultValue="1" />
            <span>-</span>
            <BathSelect id="form-baths-max" defaultValue="2.5" />
          </label>
          <label>Sqft
            <AcreageInput id="form-acres-min" defaultValue="1200" />
            <span>-</span>
            <AcreageInput id="form-acres-max" defaultValue="2300" />
          </label>
          <input type="submit" value="Search" disabled={this.props.searching} />
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { fetchFilteredLots },
)(SearchFilters);
