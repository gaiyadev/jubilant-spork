import Link from "next/link";
import React, { useEffect, useState } from "react";
import b from "../../styles/Post.module.css";
import Spinner from "../components/loading/Spinner";

const Post = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const fetchPost = () => {
    setLoading(true);
    fetch(url)
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

  const posts = post.map((item) => (
    <div className={b.Post} key={item.id}>
      <li className={b.title}> Title: {item.title}</li>
      <li>Body : {item.body} </li>
      <li>
        CreatedBy: {item.userId}
        <Link href="/post/[postId]" as={"/post/" + item.id}>
          <a className={b.link}>View</a>
        </Link>
        <Link
          href="/post/updatePost/[postId]"
          as={"/post/updatePost/" + item.id}
        >
          <a className={b.link}>Updaate</a>
        </Link>
      </li>
    </div>
  ));
  return <ul>{loading ? <Spinner></Spinner> : posts}</ul>;
};

export default Post;
