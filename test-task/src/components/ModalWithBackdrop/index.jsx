import { CloseSVG } from "../../assets/svgs/Close";

import Post from "../Posts/Post";

import styles from "./index.module.css";

function ModalWithBackdrop({ onModalClose, children }) {
  return (
    <div className={styles.RelativeContainer}>
      <div className={styles.Container}>
        <div onClick={onModalClose} className={styles.Backdrop}></div>
        <div className={styles.Modal}>
          <div className={styles.ModalHeader}>
            <div onClick={onModalClose} className={styles.CloseIcon}>
              <CloseSVG />
            </div>
          </div>
          <div className={styles.ModalBody}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ModalWithBackdrop;
