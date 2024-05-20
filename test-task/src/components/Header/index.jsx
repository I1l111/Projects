import { useState } from "react";

import { LogoSVG } from "../../assets/svgs/Logo";

import Search from "../Search";

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
      <Search
        searchValue={searchValue}
        showInput={showSearchInput}
        onChangeHandler={handleSearchInputChange}
        onBlurHandler={handleInputBlur}
        onIconClickHandler={handleSearchIconClick}
      />
    </div>
  );
}

export default Header;
