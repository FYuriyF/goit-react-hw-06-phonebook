import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label>
        Filter contacts by name:
        <input type="text" onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export default Filter;
