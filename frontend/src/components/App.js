import React from 'react';

import Header from './Header';
import MapContainer from './map/MapContainer';
import ResultsPanel from './results/ResultsPanel';
import SearchFilters from './search-filters/SearchFilters';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchFilters />
      <div className='row results-and-map'>
        <div className='column'>
          <MapContainer />
        </div>
        <div className='column column-resultslist'>
          <ResultsPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
