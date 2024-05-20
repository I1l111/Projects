import Post from "./Post";

import styles from "./index.module.css";

function Posts({ posts, onPostClick }) {
  return (
    <div className={styles.PostsFlexContainer}>
      {posts.map((post, index) => {
        return (
          <div
            key={index}
            onClick={() => onPostClick(post)}
            className={styles.FlexItem}
          >
            <Post
              showImage
              autor={post.autor}
              title={post.title}
              tag={post.tags}
              text={post.text}
              date={post.date}
              views={post.views}
              img={post.img}
              img2x={post.img_2x}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
