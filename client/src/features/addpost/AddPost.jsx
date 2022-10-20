import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./addpost.css";


const AddPost = () => {
  const dispatch = useDispatch()
  const [content, setUserPost] = useState();
  console.log(content)
  
  const onClickPost = () =>{
    dispatch()
    setUserPost("")
  }

  return (
    <section className="addpost">
      <form>
        <textarea
          id="userpost"
          name="userpost"
          placeholder="pleasae enter your post"
          onChange={(e) => setUserPost(e.target.value)}
          value={content}
          className="inputstyle"
        />
      </form>
      <button type="button" class="btn btn-primary mt-3" onClick={onClickPost}>
        Post
      </button>
    </section>
  );
};

export default AddPost;
