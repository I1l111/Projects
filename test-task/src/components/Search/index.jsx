import { SearchSVG } from "../../assets/svgs/search";

import styles from "./index.module.css";

function Search({
  searchValue,
  showInput,
  onChangeHandler,
  onBlurHandler,
  onIconClickHandler,
}) {
  return (
    <div className={styles.Search}>
      {!showInput && (
        <div onClick={onIconClickHandler} className={styles.SearchButton}>
          <SearchSVG />
        </div>
      )}
      {showInput && (
        <input
          name="search"
          value={searchValue}
          autoFocus
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
      )}
    </div>
  );
}

export default Search;
