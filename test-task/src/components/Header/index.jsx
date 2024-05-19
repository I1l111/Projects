import { useState } from "react";

import styles from "./index.module.css";
import { Logo } from "../../assets/svgs/Logo";
import { Search } from "../../assets/svgs/search";

function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
        <Logo />
      </div>
      <div className={styles.Search}>
        {!showSearchInput && (
          <div onClick={handleSearchIconClick} className={styles.SearchButton}>
            <Search />
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
