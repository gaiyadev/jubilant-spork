import React,{useState, useEffect} from 'react';
import { useRouter } from "next/router";
import Spinner from '../../components/loading/Spinner'
import Navbar from '../../components/Header/Header';



const UpdatePost = () => {
    const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

     const router = useRouter();
    const { postId } = router.query;
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts/");
  const [loading, setLoading] = useState(false);



const fetchPost = () => {
    setLoading(true);
    fetch(url + postId)
      .then((response) => response.json())
      .then((res) => {
        setLoading(false);
        setBody(res['body']);
        setTitle(res['title'])
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPost();    
  }, []);
    

  const submitHandler = event => {
    setLoading(true)
    event.preventDefault();
    const body = {
      title,
      body,
    }

    fetch(url+ postId, {
      method: "PUT"
    }, {
        body: JSON.stringify(body)
    }).then((response) => response.json())
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };


     return (
    <React.Fragment>
      <Navbar></Navbar>
      <div>
        {title}
        {body}
       
       {loading? <Spinner></Spinner>:  <form onSubmit={submitHandler}>
          <input value={title} required placeholder="title"  type="text" name="title" onChange={event => {
                const newTitle = event.target.value;
                setTitle(newTitle);
              }
              } /> <br />
        <br />
        <textarea value={body} required name="body" onChange={event => {
                const newBody = event.target.value;
                setBody(newBody);
              }
              } placeholder="body" rows="6" cols="30"></textarea> <br /> <br />
        
        <button type="submit" name="submnt"  >Update</button>
        </form>}
      </div>
    </React.Fragment>
  );
}
 
export default UpdatePost;