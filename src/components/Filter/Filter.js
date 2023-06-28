import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" onChange={changeFilter}></input>
    </label>
  );
};

export default Filter;
