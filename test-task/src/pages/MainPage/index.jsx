import { useState } from "react";

import Posts from "../../components/Posts";
import Post from "../../components/Posts/Post";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import Error from "../../components/Error";
import Header from "../../components/Header";

import { useFetch } from "../../hooks/useFetch";
import { useDebounce } from "../../hooks/useDebounce";

import { getFilteredPosts } from "../../helpers/getFilteredPosts";

import styles from "./index.module.css";

const POSTS_API_URL = "https://cloud.codesupply.co/endpoint/react/data.json";

const SELECTED_POST_INITIAL_STATE = {
  showModal: false,
  post: null,
};

function MainPage() {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const [selectedPostState, setSelectedPostState] = useState({
    ...SELECTED_POST_INITIAL_STATE,
  });

  const { data: posts, loading, error } = useFetch(POSTS_API_URL);
  const filteredPosts = getFilteredPosts({
    searchValue: debouncedSearchValue,
    posts,
  });

  const [verticalMenuVisibility, setVerticalMenuVisibility] = useState(false);

  function handleMenuToggle() {
    setVerticalMenuVisibility((prevState) => !prevState);
  }

  function handlePostClick(post) {
    setSelectedPostState({
      post,
      showModal: true,
    });
  }

  function handleModalClose() {
    setSelectedPostState({ ...SELECTED_POST_INITIAL_STATE });
  }

  const pageContainerClasses =
    selectedPostState.showModal || verticalMenuVisibility
      ? styles.HideScrollbar
      : styles.Layout;

  const showPosts = !error && !loading;

  return (
    <>
      {selectedPostState.showModal && (
        <Modal onClose={handleModalClose}>
          <Post post={selectedPostState.post} alignHorizontally />
        </Modal>
      )}

      <main className={pageContainerClasses}>
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          open={verticalMenuVisibility}
          onMenuToggle={handleMenuToggle}
        />

        {loading && <Loader />}

        {error && <Error errorMessage={error.message} />}

        {showPosts && <Posts posts={filteredPosts} onClick={handlePostClick} />}
      </main>
    </>
  );
}

export default MainPage;
