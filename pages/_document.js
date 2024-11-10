// custom document outline (default)
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>{/* Add custom links, meta tags, or styles here */}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
