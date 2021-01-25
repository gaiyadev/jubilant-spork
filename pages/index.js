import Head from "next/head";
import styles from "../styles/Home.module.css";
import Post from "./post/index";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Header/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Next Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main className={styles.main}>
        <Post></Post>
      </main>
      <Footer></Footer>
    </div>
  );
}
