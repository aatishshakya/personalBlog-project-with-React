import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/card";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";
const SideBar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);
  return (
    <div className="sideBarContainer">
      <Card>
        <div className="cardHeader">
          <span>About Us</span>
          <div className="profileImageContainer">
            <img
              alt="Aatish Shakya"
              src={require("../../Images/About/aatish.jpg")}
            />
          </div>
          <div className="cardBody">
            <p className="personalBio">
              My name is Aatish Shakya. I am a frontEnd Developer.
            </p>
          </div>
        </div>
      </Card>
      <Card>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>
      <Card>
        <div className="recentPosts">
          <h3>Recent Posts </h3>
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/post/${post.id}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};
export default SideBar;
