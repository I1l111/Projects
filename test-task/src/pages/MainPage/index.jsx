import { useState } from "react";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Posts from "../../components/Posts";

import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useFetch } from "../../hooks/useFetch";
// import { useQuery } from '../../hooks/useQuery';

import styles from "./index.module.css";
import { useDebounce } from "../../hooks/useDebounce";

const STICKY_HEADER_HEIGHT_THRESHOLD = 200;
const POSTS_API_URL = "https://cloud.codesupply.co/endpoint/react/data.json";

function MainPage() {
  const { scrollPosition } = useScrollPosition();
  const [ searchValue, setSearchValue ] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const { data: posts, loading, error } = useFetch(POSTS_API_URL);
  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(debouncedSearchValue.toLowerCase()));

  /* useQuery
  const { data: posts, loading, error } = useQuery(
    ({ signal }) => fetch(POSTS_API_URL, { signal }).then(res => res.json()),
  );
  */

  if (error) {
    return <p>Error {error.message}</p>
  }

  const navbarTop = scrollPosition > STICKY_HEADER_HEIGHT_THRESHOLD
    ? STICKY_HEADER_HEIGHT_THRESHOLD - scrollPosition
    : 0;

  return (
    <div>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div style={{ top: `${navbarTop}px` }} className={styles.NavBarContainer}>
        <NavBar />
      </div>
      
      {loading && <p>Loading...</p>}
      <Posts posts={filteredPosts} />
    </div>
  );
}

export default MainPage;
