import { LogoSVG } from "../../assets/svgs/Logo";

import Search from "../Search";
import Menu from "../Menu";

import { useScrollPosition } from "../../hooks/useScrollPosition";

import styles from "./desktop.module.css";

const STICKY_HEADER_HEIGHT_THRESHOLD = 200;

function Header({ searchValue, setSearchValue }) {
  const { scrollPosition } = useScrollPosition();

  const navbarTop =
    scrollPosition > STICKY_HEADER_HEIGHT_THRESHOLD
      ? STICKY_HEADER_HEIGHT_THRESHOLD - scrollPosition
      : 0;

  return (
    <>
      <header className={styles.LogoAndSearch}>
        <div className={styles.LogoContainer}>
          <LogoSVG />
        </div>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>
      <nav style={{ top: `${navbarTop}px` }} className={styles.MenuContainer}>
        <Menu />
      </nav>
    </>
  );
}

export default Header;
