import { CloseSVG } from "../../assets/svgs/Close";

import styles from "./index.module.css";

function Modal({ onClose, children }) {
  return (
    <div className={styles.RelativeContainer}>
      <div className={styles.Container}>
        <div onClick={onClose} className={styles.Backdrop}></div>
        <div className={styles.Modal}>
          <div className={styles.ModalHeader}>
            <div onClick={onClose} className={styles.CloseIcon}>
              <CloseSVG />
            </div>
          </div>
          <div className={styles.ModalBody}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
