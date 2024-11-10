import Head from 'next/head';
import Image from 'next/image';
import PostList from '../components/PostList';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostList posts={posts} />
    </div>
  );
}

// Fetch data at build time
export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
