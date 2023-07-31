import Layout from "~/components/Layout";
import Head from "next/head";
import { PostList } from "~/components/posts/PostList";

export default function Home() {
  return (
    <>
      <Head>
        <title>플라이</title>
        <meta name="description" content="플라이" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <PostList />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
