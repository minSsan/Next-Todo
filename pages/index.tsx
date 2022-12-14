import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import PostList from "../components/postList/PostList";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout>
        <Head>
          <title>minsan todo</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <PostList todos={posts} />
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );

  return {
    props: { posts },
  };
};
