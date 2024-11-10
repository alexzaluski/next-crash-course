import { useRouter } from 'next/router';

const postDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>This a post with id: {id}</div>;
};

export default postDetails;
