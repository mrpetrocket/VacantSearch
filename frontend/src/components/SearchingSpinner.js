import React from 'react';

export default function SearchingSpinner() {
  return (
    <div id='sidebar-form-search-in-progress'>
      <div className="linear-progress-container">
        <div className="indeterminate-progress"></div>
      </div>
      <p>Searching...</p>
    </div>
  );
}
