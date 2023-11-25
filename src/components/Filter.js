// src/components/Filter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTodos } from '../store/todosSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (property, value) => {
    dispatch(filterTodos({ property, value }));
  };

  return (
    <div>
      <label>Filter by Priority:</label>
      <select onChange={(e) => handleFilterChange('priority', e.target.value)}>
        <option value="">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <label>Filter by Status:</label>
      <select onChange={(e) => handleFilterChange('status', e.target.value)}>
        <option value="">All</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
        <option value="Not Yet Started">Not Yet Started</option>
      </select>
    </div>
  );
};

export default Filter;
