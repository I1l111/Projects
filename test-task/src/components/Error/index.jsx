import { ErrorSVG } from "../../assets/svgs/Error";

import styles from "./index.module.css";

function Error({ errorMessage }) {
  return (
    <div className={styles.Error}>
      <p>Error</p>
      <div className={styles.IconWrapper}>
        <ErrorSVG />
      </div>
      <p>{errorMessage}</p>
    </div>
  );
}

export default Error;
