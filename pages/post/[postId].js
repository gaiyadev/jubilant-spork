import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Header/Header";

const SinglePost = () => {
  const [post, setPost] = useState([]);

  const router = useRouter();
  const { postId } = router.query;

  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((response) => response.json())
      .then((res) => {
        setPost(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const deleteHandler = (id) => {
    console.log(id);
    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        alert("Deleted was simulated");
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <ul>
        {post ? (
          <div>
            <li style={{ color: "blue" }}> Title: {post.title}</li>
            <li>Body : {post.body} </li>
            <li>
              CreatedBy: {post.userId}
              <button onClick={() => deleteHandler(post.id)}>Delete</button>
            </li>
          </div>
        ) : (
          " npp"
        )}
      </ul>
    </React.Fragment>
  );
};

export default SinglePost;
