import Link from "next/link";
import React, { useEffect, useState } from "react";
import b from "../../styles/Post.module.css";

const Post = () => {
  const [post, setPost] = useState([]);

  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        setPost(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <ul>
      {post.map((item) => (
        <div className={b.Post} key={item.id}>
          <li className={b.title}> Title: {item.title}</li>
          <li>Body : {item.body} </li>
          <li>
            CreatedBy: {item.userId}
            <Link href="/post/[postId]" as={"/post/" + item.id}>
              <a className={b.link}>View</a>
            </Link>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Post;
