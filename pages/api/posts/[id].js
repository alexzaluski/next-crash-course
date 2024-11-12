import { posts } from '../../../data';

export default function handler(req, res) {
  const { id } = req.query;

  // worse solution
  //   const filteredPosts = posts.filter((post) => post.id === id);

  //   if (filteredPosts.length > 0) {
  //     res.status(200).json(filteredPosts[0]);
  //   } else {
  //     res.status(404).json({ message: `Post with id ${id} is not found` });
  //   }

  // better solution
  const post = posts.find((post) => post.id === id);

  if (post) res.status(200).json(post);
  else {
    return res.status(404).json({ message: `Post with id ${id} is not found` });
  }
}
