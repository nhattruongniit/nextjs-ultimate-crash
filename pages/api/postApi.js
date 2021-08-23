export const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await res.json();
  return data;
}

export const fetchPostByIds = async () => {
  const res = await fetchPosts();
  return res.map(post => ({
    params: {
      id: post.id.toString()
    } 
  }));
}

export const fetchPostById = async id => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}