import { useState } from "react";

import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Post from "../../components/Posts/Post";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import Error from "../../components/Error";

import { useFetch } from "../../hooks/useFetch";
import { useDebounce } from "../../hooks/useDebounce";

import { getFilteredPosts } from "../../helpers/getFilteredPosts";

import styles from "./index.module.css";

const POSTS_API_URL = "https://cloud.codesupply.co/endpoint/react/data.json";

function MainPage() {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { data: posts, loading, error } = useFetch(POSTS_API_URL);
  const filteredPosts = getFilteredPosts({
    searchValue: debouncedSearchValue,
    posts,
  });

  function handlePostClick(post) {
    setSelectedPost(post);
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  const pageContainerClasses = showModal ? styles.HideScrollbar : styles.Layout;

  const showPosts = !error && !loading;

  return (
    <>
      {showModal && (
        <Modal onClose={handleModalClose}>
          <Post post={selectedPost} alignHorizontally />
        </Modal>
      )}

      <div className={pageContainerClasses}>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />

        {loading && <Loader />}

        {error && <Error errorMessage={error.message} />}

        {showPosts && <Posts posts={filteredPosts} onClick={handlePostClick} />}
      </div>
    </>
  );
}

export default MainPage;
