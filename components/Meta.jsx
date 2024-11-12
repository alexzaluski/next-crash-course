import Head from 'next/head';

// there are available packages that manage this actually (e.g. next-seo)
const Meta = ({
  title = 'WebDev Newz',
  keywords = 'web development, programming',
  description = 'Get the latest web dev news',
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
