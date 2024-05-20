import { useState } from "react";

import { LogoSVG } from "../../assets/svgs/Logo";
import { SearchSVG } from "../../assets/svgs/search";

import styles from "./index.module.css";

function Header({ searchValue, setSearchValue }) {
  const [showSearchInput, setShowSearchInput] = useState(false);

  function handleSearchIconClick() {
    setShowSearchInput(true);
  }

  function handleInputBlur() {
    setShowSearchInput(false);
  }

  function handleSearchInputChange(event) {
    const { value } = event.target;
    setSearchValue(value);
  }

  return (
    <div className={styles.LogoAndSearch}>
      <div className={styles.LogoContainer}>
        <LogoSVG />
      </div>
      <div className={styles.Search}>
        {!showSearchInput && (
          <div onClick={handleSearchIconClick} className={styles.SearchButton}>
            <SearchSVG />
          </div>
        )}
        {showSearchInput && (
          <input
            name="search"
            value={searchValue}
            autoFocus
            onChange={handleSearchInputChange}
            onBlur={handleInputBlur}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
