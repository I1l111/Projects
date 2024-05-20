export function getFilteredPosts({ searchValue, posts }) {
  return posts.filter((post) => {
    const lowercasedValue = searchValue.toLowerCase();
    return (
      post.title.toLowerCase().includes(lowercasedValue) ||
      post.text.toLowerCase().includes(lowercasedValue)
    );
  });
}
