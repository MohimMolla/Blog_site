import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SingalPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const fetchData = async () => {
    const response = await fetch(`http://localhost/Mahim_53/React/Project/Blog-site-final/Api/post.php?id=${id}`)
    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    }
  }
  useEffect(() => {
    fetchData()
    .then((res) => {
      setPost(res);
      // console.log(res)
    })
    .catch((e) => {
      console.log(e.message)
    })    
  }, []);

  if (post) {
      return (
    <div className="post">
      <img className="postImg" src={post.images} alt="" />
      <div className="postInfo">
        <h1 className="postTitle">{post.title}</h1>
        <span className="postDate">Author: {post.author}</span>
        <span className="postDate">{post.time}</span>

        <p className="postDescription">{post.description}</p>
        <hr />
      </div>
      <br />
      <hr />
    </div>
  );
  
}
else{
  return(
    <>
    <h3>No information available</h3>
    </>
  );
}
<Link to="/">Back to Home</Link>
}
