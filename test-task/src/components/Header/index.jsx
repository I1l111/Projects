import { useState } from "react";

import styles from "./index.module.css";
import { Logo } from "../../assets/svgs/Logo";
import { Search } from "../../assets/svgs/search";

function Header() {
  return (
    <div className={styles.LogoAndSearch}>
      <div className={styles.LogoContainer}>
        <Logo />
      </div>
      <div className={styles.SearchButton}>
        <Search />
      </div>
    </div>
  );
}

export default Header;
