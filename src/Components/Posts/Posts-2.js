// import React, { useState, useEffect } from "react";
import "./Posts.css"
// import Post from "../Post/Post";
import React, { useState, useEffect } from "react";
import Post from "../Post/Post";

export default function Posts() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/Mahim_53/React/api/blog-api.php"
        );
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="posts-container">
      {postData.map((post) => (
        <div className="post" key={post.id}>
          <img className="postImg" src={post.images} alt="" />
          <div className="postInfo">
            {/* <Link to={`/post/${post.id}`}/> */}
            {/* <div className='postCategories'>
              <span className='postCategory'>Music</span>
              <span className='postCategory'>Life</span>
            </div> */}
            <h1 className="postTitle">{post?.title}</h1>
            <span className="postDate">Author: {post.author}</span>
            <span className="postDate">{post?.time}</span>
            <p className="postDescription">{post?.excerpt}</p>
            <hr />
          </div>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default function Posts() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/Mahim_53/React/api/blog-api.php"
        );
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="posts-container">
      {postData.map((post) => (
        <div className="post" key={post.id}>
          <img className="postImg" src={post.images} alt="" />
          <div className="postInfo">
            {/* <Link to={`/post/${post.id}`}/> */}
            {/* <div className='postCategories'>
              <span className='postCategory'>Music</span>
              <span className='postCategory'>Life</span>
            </div> */}
            <h1 className="postTitle">{post?.title}</h1>
            <span className="postDate">Author: {post.author}</span>
            <span className="postDate">{post?.time}</span>
            <p className="postDescription">{post?.excpert}</p>
            <hr />
          </div>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
}
