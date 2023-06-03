import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Posts from "../../Components/Posts/Posts";

export default function Home({posts,categories}) {
  return (
    <>
      <Header />
      <div className="home">
        <div className="posts-container">
          <Posts posts={posts} />
        </div>
        <div className="sidebar-container">
          <Sidebar categories={categories} />
        </div>
      </div>
    </>
  );
}
