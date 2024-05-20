import { SearchSVG } from "../../assets/svgs/Search";

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
