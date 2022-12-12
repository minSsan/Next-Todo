import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import React, { useState } from "react";
import Post, { PostProps } from "../../components/post/Post";

const PostPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {/* //? todo의 상세 정보 페이지 */}
      {/* TODO 컴포넌트 배치 */}
      <Post post={post} />
    </>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: PostProps[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  const params = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return {
    paths: params,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: PostProps = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json());

  return {
    props: { post },
  };
};
