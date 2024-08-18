import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter, setFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <div className={css.searchBlock}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={filterValue}
        onChange={handleChange}
        className="search-box"
      />
    </div>
  );
};

export default SearchBox;
