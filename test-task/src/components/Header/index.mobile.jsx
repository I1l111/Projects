import { useState } from "react";

import { LogoSVG } from "../../assets/svgs/Logo";

import Search from "../Search";
import VerticalMenu from "../VerticalMenu";

import styles from "./index.module.css";

function Header({ searchValue, setSearchValue, onMenuToggle, open }) {
  const menuIconClasses = `${styles.HamburgerIcon} ${open ? styles.Open : ""}`;
  const menuContainerClasses = `${styles.VerticalMenuContainer} ${
    open ? styles.OpenMenu : ""
  }`;
  const menuIconContainerClasses = `${styles.MenuIconContainer} ${
    open ? styles.MoveRight : ""
  }`;

  return (
    <>
      <div className={styles.LogoAndSearch}>
        <div className={styles.LogoContainer}>
          <LogoSVG />
        </div>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {open && <div onClick={onMenuToggle} className={styles.Backdrop} />}

      <div className={menuIconContainerClasses}>
        <div onClick={onMenuToggle} className={menuIconClasses}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={menuContainerClasses}>
        <VerticalMenu />
      </div>
    </>
  );
}

export default Header;
