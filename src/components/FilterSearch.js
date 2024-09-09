import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, setSearchTerm } from '../redux/taskActions';

const FilterSearch = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  const handleSearchChange = (term) => {
    dispatch(setSearchTerm(term));
  };




  return (
    <div className="filter-search">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={handleSearchChange}
      />
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default FilterSearch;
