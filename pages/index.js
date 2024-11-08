import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to Next!</h1>
    </div>
  );
}