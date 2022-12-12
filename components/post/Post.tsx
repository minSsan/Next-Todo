import { useRouter } from "next/router";
import React, { ChangeEvent, useRef, useState } from "react";

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  post: PostProps;
}

const Post = ({ post }: Props) => {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStartEditClick = () => {
    setInputs({
      title: post.title,
      body: post.body,
    });
    setIsEdit(true);
  };

  const handleUpdateClick = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: inputs.title,
        body: inputs.body,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => alert(JSON.stringify(res.title)));
    setIsEdit(false);
  };

  const handleRemoveClick = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "DELETE",
    });
    alert(`id: ${post.id} 인 게시글이 삭제되었습니다.`);
    router.push("/");
  };
  return (
    <>
      {/* //? TODO 상세정보 페이지에 들어갈 컴포넌트 */}
      {/* 제목 | 내용 */}
      {/* 수정하기 | 삭제하기 버튼 */}
      {isEdit ? (
        <>
          <div>
            <h2>제목</h2>
            <input
              name="title"
              value={inputs.title}
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            <h2>내용</h2>
            <input
              name="body"
              value={inputs.body}
              type="text"
              onChange={handleChange}
            />
          </div>
          <button onClick={handleUpdateClick}>수정 완료하기</button>
        </>
      ) : (
        <>
          <h1>{post.id}</h1>
          <h1>{post.title}</h1>
          <button onClick={handleStartEditClick}>수정하기</button>
          <button onClick={handleRemoveClick}>삭제하기</button>
        </>
      )}
    </>
  );
};

export default React.memo(Post);
