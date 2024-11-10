import Link from 'next/link';
import styles from '../styles/Post.module.css';

const PostItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`} className={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </Link>
  );
};

export default PostItem;
