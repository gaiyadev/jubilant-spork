import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Navbar from "../components/Header/Header";

const SinglePost = () => {
  const router = useRouter();
  const { postId } = router.query;
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className={styles.container}>
        <h1>This is a single post with id: {postId}</h1>
      </div>
    </React.Fragment>
  );
};

export default SinglePost;
