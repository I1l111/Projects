import { ArrowSVG } from "../../assets/svgs/Arrow";
import { LogoSVG } from "../../assets/svgs/Logo";

import Submenu from "../Submenu";

import { MENU_ITEMS } from "../../data/menuItems";

import styles from "./index.module.css";

function VerticalMenu() {
  return (
    <div className={styles.MenuContainer}>
      <div className={styles.LogoContainer}>
        <LogoSVG />
      </div>
      {MENU_ITEMS.map((item) => {
        return (
          <div key={item.id} className={styles.MenuItem}>
            <span className={styles.Text}>{item.name}</span>
            {item.showArrow && (
              <>
                <div className={styles.ArrowContainer}>
                  <ArrowSVG />
                </div>
                <div className={styles.SubmenuContainer}>
                  <Submenu />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default VerticalMenu;
