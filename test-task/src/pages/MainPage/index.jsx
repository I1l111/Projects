import { useState, useEffect } from "react";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Posts from "../../components/Posts";

import styles from "./index.module.css";

function MainPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = document.documentElement.scrollTop;
    setScrollPosition(position);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarTop = scrollPosition > 200 ? 200 - scrollPosition : 0;

  return (
    <div>
      <Header />
      <div style={{ top: `${navbarTop}px` }} className={styles.NavBarContainer}>
        <NavBar />
      </div>

      <Posts />
    </div>
  );
}

export default MainPage;
