import { useState } from "react";

import { SearchSVG } from "../../assets/svgs/Search";

import styles from "./index.module.css";

function Search({ searchValue, setSearchValue }) {
  const [showInput, setShowInput] = useState(false);

  function handleInputChange(event) {
    const { value } = event.target;
    setSearchValue(value);
  }

  function handleSearchIconClick() {
    setShowInput(true);
  }

  function handleInputBlur() {
    setShowInput(false);
  }

  return (
    <div className={styles.Search}>
      {!showInput && (
        <div onClick={handleSearchIconClick} className={styles.SearchButton}>
          <SearchSVG />
        </div>
      )}
      {showInput && (
        <input
          name="search"
          value={searchValue}
          autoFocus
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      )}
    </div>
  );
}

export default Search;
