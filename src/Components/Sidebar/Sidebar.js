import React from "react";
import "./Sidebar.css";

export default function Sidebar({categories}) {
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">About Me</span>
        <img
          className="sideimg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnLBCINGArmzB0afMJjYk5EtlhPuP_hz9LLGjw97zMgBiCHbDfF_S7FUAwj_RSaqF5zk&usqp=CAU"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          distinctio quis, aspernatur necessitatibus minima, doloribus nesciunt
          enim deleniti velit nam veritatis asperiores temporibus. Placeat in
          est, aliquam alias nulla at?
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">Categories</span>
        <ul className="sideBarList">
          {categories.map((category)=>(
            <li className="sideBarListItem">{category.name}</li>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">Flow us</span>
        <div className="sidebarSocial">
        <i className="sidebrIcon fa-brands fa-square-facebook fa-2xl"></i>
        <i className="sidebrIcon fa-brands fa-square-instagram fa-2xl"></i>
        <i className="sidebrIcon fa-brands fa-square-twitter fa-2xl"></i>
        <i className="sidebrIcon fa-brands fa-pinterest fa-2xl"></i>
        </div>
      </div>
    </div>
  );
}
