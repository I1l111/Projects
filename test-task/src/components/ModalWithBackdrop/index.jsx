import { CloseSVG } from "../../assets/svgs/Close";

import Post from "../Posts/Post";

import styles from "./index.module.css";

function ModalWithBackdrop({ post, onModalClose }) {
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
          <div className={styles.ModalBody}>
            <Post
              autor={post.autor}
              title={post.title}
              tag={post.tags}
              text={post.text + post.text}
              date={post.date}
              views={post.views}
              img={post.img}
              img2x={post.img_2x}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWithBackdrop;
