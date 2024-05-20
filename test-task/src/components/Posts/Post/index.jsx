import { useState } from "react";

import styles from "./index.module.css";

function Post({ autor, title, tag, text, date, views, img, img2x, showImage }) {
  return (
    <div className={styles.PostFlexItem}>
      {showImage && (
        <div className={styles.ImageContainer}>
          <picture width="100%">
            <source width="100%" srcSet={img2x} type="image/jpg" />
            <img width="100%" src={img} type="image/jpg" alt="posts image" />
          </picture>
        </div>
      )}
      <p className={styles.Tag}>{tag}</p>
      <p className={styles.Title}>{title}</p>
      <div className={styles.GeneralInfoContainer}>
        <span className={styles.Autor}>{autor}</span>
        <span className={styles.AdditionalInfo}>{date}</span>
        <span className={styles.AdditionalInfo}>{views}</span>
      </div>
      <p className={styles.PostText}>{text}</p>
    </div>
  );
}

export default Post;
