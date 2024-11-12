const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : 'https://some_website.com';
// : 'https://webdevnewz.vercel.app';
