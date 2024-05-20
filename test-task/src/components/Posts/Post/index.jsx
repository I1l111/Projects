import styles from "./index.module.css";

function Post({ post }) {
  const srcSet = `${post.img} 360w, ${post.img_2x} 720w`;

  return (
    <div className={styles.PostFlexItem}>
      <div className={styles.ImageContainer}>
        <img width="100%" srcSet={srcSet} src={post.img} type="image/jpg" alt="posts image" />
      </div>
      <p className={styles.Tag}>{post.tags}</p>
      <p className={styles.Title}>{post.title}</p>
      <div className={styles.GeneralInfoContainer}>
        <span className={styles.Autor}>{post.autor}</span>
        <span className={styles.AdditionalInfo}>{post.date}</span>
        <span className={styles.AdditionalInfo}>{post.views}</span>
      </div>
      <p className={styles.PostText}>{post.text}</p>
    </div>
  );
}

export default Post;
