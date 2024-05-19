import { Arrow } from "../../assets/svgs/Arrow";

import Submenu from "../Submenu";

import styles from "./index.module.css";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Demos",
    showArrow: true,
  },
  {
    id: 2,
    name: "Post",
    showArrow: true,
  },
  {
    id: 3,
    name: "Features",
    showArrow: true,
  },
  {
    id: 4,
    name: "Categories",
    showArrow: true,
  },
  {
    id: 5,
    name: "Shop",
    showArrow: true,
  },
  {
    id: 6,
    name: "Buy Now",
    showArrow: false,
  },
];

function NavBar() {
  return (
    <div className={styles.NavBar}>
      {MENU_ITEMS.map((item) => {
        return (
          <div key={item.id} className={styles.NavigationItem}>
            <span className={styles.Text}>{item.name}</span>
            {item.showArrow && (
              <>
                <div className={styles.ArrowContainer}>
                  <Arrow />
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

export default NavBar;
