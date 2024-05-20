import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Posts from "../../components/Posts";
import Post from "../../components/Posts/Post";
import Loader from "../../components/Loader";
import ModalWithBackdrop from "../../components/ModalWithBackdrop";

import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useFetch } from "../../hooks/useFetch";
// import { useQuery } from '../../hooks/useQuery';

import styles from "./index.module.css";
import { useDebounce } from "../../hooks/useDebounce";

const STICKY_HEADER_HEIGHT_THRESHOLD = 200;
const POSTS_API_URL = "https://cloud.codesupply.co/endpoint/react/data.json";

function MainPage() {
  const { scrollPosition } = useScrollPosition();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostDetailsModalOpen, setIsPostDetailsModalOpen] = useState(false);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const { data: posts, loading, error } = useFetch(POSTS_API_URL);
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(debouncedSearchValue.toLowerCase())
  );

  /* useQuery
  const { data: posts, loading, error } = useQuery(
    ({ signal }) => fetch(POSTS_API_URL, { signal }).then(res => res.json()),
  );
  */

  function handlePostClick(post) {
    setIsPostDetailsModalOpen(true);
    setSelectedPost(post);
  }

  function handlePostDetailsModalClose() {
    setIsPostDetailsModalOpen(false);
  }

  useEffect(() => {
    if (!error) {
      return;
    }
    // setIsErrorModalOpen(true);
  }, [error]);

  function handleErrorModalClose() {
    setIsErrorModalOpen(false);
  }

  const hideScrollbar =
    isPostDetailsModalOpen || isErrorModalOpen
      ? styles.HideScrollbar
      : styles.Layout;

  const navbarTop =
    scrollPosition > STICKY_HEADER_HEIGHT_THRESHOLD
      ? STICKY_HEADER_HEIGHT_THRESHOLD - scrollPosition
      : 0;

  const showPosts = !error && !loading;

  return (
    <div>
      {isErrorModalOpen && (
        <ModalWithBackdrop onModalClose={handleErrorModalClose}>
          <p>Error</p>
          <p>{error?.message}</p>
        </ModalWithBackdrop>
      )}
      {isPostDetailsModalOpen && (
        <ModalWithBackdrop onModalClose={handlePostDetailsModalClose}>
          <Post
            autor={selectedPost.autor}
            title={selectedPost.title}
            tag={selectedPost.tags}
            text={selectedPost.text + selectedPost.text}
            date={selectedPost.date}
            views={selectedPost.views}
            img={selectedPost.img}
            img2x={selectedPost.img_2x}
          />
        </ModalWithBackdrop>
      )}
      <div className={hideScrollbar}>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div
          style={{ top: `${navbarTop}px` }}
          className={styles.NavBarContainer}
        >
          <Menu />
        </div>

        {loading && <Loader />}

        {showPosts && (
          <Posts posts={filteredPosts} onPostClick={handlePostClick} />
        )}
      </div>
    </div>
  );
}

export default MainPage;
