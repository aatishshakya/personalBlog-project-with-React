import React from "react";
import "./style.css";
import Card from "../../../components/UI/card";
const RecentPosts = (props) => {
  return (
    <div style={{ width: "70%" }}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper" style={{ textAlign: "center" }}>
          <img src="https://socialnicole.com/wp-content/uploads/sites/16/2019/09/Blog-Writing-Feature-Image.jpg" />
          <span>Featured</span>
          <h2>Fitnerss Mantra to Live Fit Life</h2>
          <span>posted on July 23,2020 by Aatish Shakya</span>
          <p>
            Hello this is personal blog developed by aatish shakya. Aatish
            shakya is a frontend developer who keeps on developing the website.
          </p>
          <button className="button">
            <span>Read More</span>
          </button>
        </div>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img src="https://socialnicole.com/wp-content/uploads/sites/16/2019/09/Blog-Writing-Feature-Image.jpg" />
        </div>
      </Card>
    </div>
  );
};
export default RecentPosts;
