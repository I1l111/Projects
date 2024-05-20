import { ArrowSVG } from "../../assets/svgs/Arrow";

import { SUBMENU_ITEMS } from "../../data/menuItems";

import styles from "./index.module.css";

function Submenu() {
  return (
    <div className={styles.Submenu}>
      {SUBMENU_ITEMS.map((item) => {
        return (
          <div key={item.id} className={styles.SubmenuItem}>
            <span className={styles.Text}>{item.name}</span>
            <div className={styles.ArrowContainer}>
              <ArrowSVG />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Submenu;
