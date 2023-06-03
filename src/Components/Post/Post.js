import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

export default function Post({ post }) {
  // const imageSrc = require(`../../assest/image${post.images}`);

  // console.log(post);
  return (
    <div className="post">
      <img className="postImg" src={post.images} alt="" />
      <div className="postInfo">
        {/* <Link to={`/post/${post.id}`}/> */}
        {/* <div className='postCategories'>
          <span className='postCategory'>Music</span>
          <span className='postCategory'>Life</span>
        </div> */}
        <h1>
          <Link to={`/singalpost/${post.id}`} className="postTitle">
            {post.title}
          </Link>
        </h1>
        {/* <h1 className='postTitle'>{post?.title}</h1> */}
        <div className="at">
          <span className="postDate">Author: {post.author}</span>
          <span className="postDate">{post?.time}</span>
        </div>
        <p className="postDescription">{post?.excpert}</p>
      </div>
    </div>
  );
}
