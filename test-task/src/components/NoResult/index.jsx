import { SearchSVG } from "../../assets/svgs/search";

import styles from "./index.module.css";

function NoResult() {
  return (
    <div className={styles.NoResult}>
      <SearchSVG />
      <p>No Data</p>
    </div>
  );
}

export default NoResult;
