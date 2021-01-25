import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Header/Header";
import Spinner from '../components/loading/Spinner'

const SinglePost = () => {
  const [post, setPost] = useState([]);
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts/");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { postId } = router.query;

  const fetchPost = () => {
    setLoading(true);
    fetch(url + postId)
      .then((response) => response.json())
      .then((res) => {
        setLoading(false);
        setPost(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPost();    
  }, []);

  const deleteHandler = (id) => {
    fetch(url + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        
        alert("Deleted was simulated");
        router.push("/");
      })
      .catch((err) => console.log(err));
  };
  const postw = post ? (
    <div>
      <li style={{ color: "blue" }}> Title: {post.title}</li>
      <li>Body : {post.body} </li>
      <li>
        CreatedBy: {post.userId}
        <button onClick={() => deleteHandler(post.id)}>Delete</button>
      </li>
    </div>
  ) : null;

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <ul>{loading ? <Spinner></Spinner> : postw}</ul>
    </React.Fragment>
  );
};

export default SinglePost;
