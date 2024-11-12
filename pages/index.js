import { server } from '../config/index';
import PostList from '../components/PostList';

export default function Home({ posts }) {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}

// Fetch data at build time
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`);
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};

// // Fetch data at build time
// export const getStaticProps = async () => {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?_limit=6'
//   );
//   const data = await res.json();

//   return {
//     props: {
//       posts: data,
//     },
//   };
// };
