import { useDispatch } from 'react-redux';
import { updateFilter } from '../../store/contactsSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <div>
      <label className={css.label}>
        FIND CONTACTS BY NAME
        <input
          type="text"
          onChange={handleFilterChange}
          className={css.inputName}
        />
      </label>
    </div>
  );
};

export default Filter;
