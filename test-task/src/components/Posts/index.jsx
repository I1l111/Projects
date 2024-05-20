import NoResult from "../NoResult";
import Post from "./Post";

import styles from "./index.module.css";

function Posts({ posts, onClick }) {
  if (!posts || posts.length === 0) {
    return <NoResult />;
  }

  return (
    <div className={styles.PostsFlexContainer}>
      {posts.map((post, index) => {
        return (
          <div
            key={index}
            onClick={() => onClick(post)}
            className={styles.FlexItem}
          >
            <Post post={post} />
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
