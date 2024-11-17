const dev = process.env.NODE_ENV !== "production";

// Use process.env.PORT or default to 3000
const port = process.env.PORT || 3000;

export const server = dev
  ? `http://localhost:${port}`
  : "https://some_website.com";
// : 'https://webdevnewz.vercel.app';
