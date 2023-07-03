import Head from "next/head";
import BackButton from "../components/back-button";

export default function NewsHomepage() {
  return (
    <>
      <Head>
        <title>News Homepage</title>
        <meta name="description" content="News Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="">
          <h1>News Homepage</h1>
        </div>
      </main>
    </>
  );
}
