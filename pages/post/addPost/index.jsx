import React,{useState, useRef} from "react";
import styles from "../../../styles/Home.module.css";
import Navbar from "../../components/Header/Header";
import Spinner from '../../components/loading/Spinner'

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  const [loading, setLoading] = useState(false);


  

  const submitHandler = event => {
    setLoading(true)
    event.preventDefault();
    const body = {
      title,
      body,
    }
    fetch(url, {
      method: "POST"
    }, {
        body: JSON.stringify(body)
    }).then((response) => response.json())
      .then((res) => {
        setLoading(false);
        setPost(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };


  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className={styles.main}>
        {title}
        {body}
       
       {loading? <Spinner></Spinner>:  <form onSubmit={submitHandler}>
          <input required placeholder="title"  type="text" name="title" onChange={event => {
                const newTitle = event.target.value;
                setTitle(newTitle);
              }
              } /> <br />
        <br />
        <textarea required name="body" onChange={event => {
                const newBody = event.target.value;
                setBody(newBody);
              }
              } placeholder="body" rows="6" cols="30"></textarea> <br /> <br />
        
        <button type="submit" name="submnt"  >Add</button>
        </form>}
      </div>
    </React.Fragment>
  );
};

export default AddPost;
