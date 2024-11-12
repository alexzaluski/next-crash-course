import { server } from '../../../config';
import Link from 'next/link';
import { useRouter } from 'next/router';

const postDetails = ({ post }) => {
  // const router = useRouter();
  // const { id } = router.query;
  // return <div>This is post with id: {post.id}</div>;

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

/**
 * Fetch data on each request (server-side rendering).
 * Ideal for frequently changing data or user-specific content.
 *
 * Example: In an e-commerce site, use this for real-time data like cart items,
 * or admin dashboard stats where data updates frequently.
 */
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`${server}/api/posts`);
//   const data = await res.json();
//   return {
//     props: {
//       post: data,
//     },
//   };
// };

/**
 * Fetch data at build time (static generation).
 * Ideal for infrequently changing data, like blog posts or product listings.
 *
 * Example: In an author portfolio, use this for static pages like book descriptions
 * or the author’s bio, which don’t change frequently and can be cached for performance.
 */
export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${server}/api/posts/${params.id}`);
  const data = await res.json();
  return {
    props: { post: data },
  };
};

/**
 * Define dynamic paths for static generation (SSG).
 * getStaticPaths tells Next.js which dynamic routes to pre-render at build time.
 *
 * Example Use: Pre-render pages for blog posts, books, or products by
 * defining available post IDs so each page is generated ahead of time.
 */
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/posts`);
  const data = await res.json();

  const paths = data.map((post) => ({
    params: { id: post.id.toString() }, // Define path with each post's ID
  }));

  return {
    paths, // Pre-render these paths at build time
    fallback: false, // Show 404 if path is not returned by getStaticPaths
  };
};

export default postDetails;
