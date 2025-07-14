import React from 'react';
import StatusDropdown from './StatusDropdown';

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
      <div>
        <label className="mr-2 font-semibold">Status:</label>
        <StatusDropdown value={filter.status} onChange={e => setFilter(f => ({ ...f, status: e.target.value }))} />
      </div>
      <div>
        <label className="mr-2 font-semibold">Applied Date:</label>
        <input type="date" value={filter.date} onChange={e => setFilter(f => ({ ...f, date: e.target.value }))} className="input input-bordered" />
      </div>
      <button className="btn btn-secondary" onClick={() => setFilter({ status: '', date: '' })}>Clear Filters</button>
    </div>
  );
};

export default FilterBar; 