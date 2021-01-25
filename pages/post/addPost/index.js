import React from "react";
import styles from "../../../styles/Home.module.css";
import Navbar from "../../components/Header/Header";

const AddPost = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className={styles.container}>
        <h1>thisis add post components</h1>
      </div>
    </React.Fragment>
  );
};

export default AddPost;
