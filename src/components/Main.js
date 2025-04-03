import React from 'react';
import SearchBar from './SearchBar';
import Issues from './Issues';

const Main = ({ issues, onDelete, getStatusClass }) => {
  return (
    <main className="main-content">
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div className="issues-table-container">
        <Issues issues={issues} onDelete={onDelete} getStatusClass={getStatusClass} />
      </div>
    </main>
  );
};

export default Main;
