import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../store/filterSlice';
import { selectFilter } from '../../store/useSelector';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
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
          value={filter}
          onChange={handleFilterChange}
          className={css.inputName}
        />
      </label>
    </div>
  );
};

export default Filter;
