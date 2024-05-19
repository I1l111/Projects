import { Arrow } from "../../assets/svgs/Arrow";

import styles from "./index.module.css";

const SUBMENU_ITEMS = [
  { id: 1, name: "Post Header" },
  {
    id: 2,
    name: "Post Layout",
  },
  {
    id: 3,
    name: "Share Buttons",
  },
  {
    id: 4,
    name: "Gallery Post",
  },
  {
    id: 5,
    name: "Video Post",
  },
];

function Submenu() {
  return (
    <div className={styles.Submenu}>
      {SUBMENU_ITEMS.map((item) => {
        return (
          <div key={item.id} className={styles.SubmenuItem}>
            <span className={styles.Text}>{item.name}</span>
            <div className={styles.ArrowContainer}>
              <Arrow />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Submenu;
