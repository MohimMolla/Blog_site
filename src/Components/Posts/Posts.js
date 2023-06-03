import React, { useState, useEffect } from "react";
import Post from "../Post/Post";

export default function Posts({posts}) {
  


  return (
    <div className="posts-container">
      <div className="posts-container">
        {posts.map((p) => (
          <Post key={p.id} post={p}></Post>
        ))}
      </div>
      
    </div>
  );
}
