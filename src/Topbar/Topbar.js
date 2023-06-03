import React from "react";
import "./Topbar.css";
import propic from "../assest/img/adadad.jpg";
import logo from "../assest/image/logo.jpeg";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="top">
      <div className="topicon">
        <img className="topimg" src={logo} alt="" />
      </div>
      <div className="topLeft">
        <i className="topicon fa-brands fa-square-facebook fa-2xl"></i>
        <i className="topicon fa-brands fa-square-instagram fa-2xl"></i>
        <i className="topicon fa-brands fa-square-twitter fa-2xl"></i>
        <i className="topicon fa-brands fa-pinterest fa-2xl"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="/" className="listItem">
            Home
          </Link>
          {/* <a href="/home" className="listItem">Home</a> */}
          <Link to="/blog" className="listItem">
            Blog
          </Link>

          <Link to="/contact" className="listItem">
            Contact
          </Link>
          <Link to="/create" className="listItem">
            Create Post
          </Link>
          <Link to="/login" className="listItem">
            Login
          </Link>
        </ul>
      </div>
      <div className="topRight">
        <img className="topimg" src={propic} alt="" />
        <i className="searchicon fa-solid fa-magnifying-glass fa-2xl">

        </i>
      </div>
    </div>
  );
};

export default Topbar;
