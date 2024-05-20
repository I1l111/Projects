import styles from "./index.module.css";

function Post({ post, alignHorizontally }) {
  const srcSet = `${post.img} 360w, ${post.img_2x} 720w`;

  const postClasses = alignHorizontally ? styles.FlexContainer : styles.Post;
  return (
    <div className={postClasses}>
      <div className={styles.ImageContainer}>
        <img
          width="100%"
          srcSet={srcSet}
          src={post.img}
          type="image/jpg"
          alt="posts image"
        />
      </div>
      <div className={styles.TitleAndGeneralInfo}>
        <p className={styles.Tag}>{post.tags}</p>
        <p className={styles.Title}>{post.title}</p>
        <div className={styles.GeneralInfoContainer}>
          <span className={styles.Autor}>{post.autor}</span>
          <span className={styles.AdditionalInfo}>{post.date}</span>
          <span className={styles.AdditionalInfo}>{post.views} Views</span>
        </div>
      </div>
      <div>
        <p className={styles.PostText}>{post.text}</p>
      </div>
    </div>
  );
}

export default Post;
