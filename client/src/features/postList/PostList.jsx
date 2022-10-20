import React from "react";

import { useGetPostsQuery } from "../postSlice";
import "./postlist.css";
const PostList = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = posts.map((post) => {
      return (
        <>
          <div class="card">
            <div class="card-body">{post.title}</div>
          </div>
        </>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <h5>{content}</h5>;
};

export default PostList;
