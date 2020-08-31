import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Card from "../../components/UI/card";
import SideBar from "../../components/SideBar";
import RecentPosts from "./RecentPosts";
import blogData from "../../data/blog.json";
import Layout from "../../components/Layout";

const SideImage = (props) => {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img src={props.src} alt="Post Image" />
    </div>
  );
};

const ImageGallery = (props) => {
  return (
    <div className="galleryPost" style={props.galleryStyle}>
      <section className="mainImageWrapper" style={{ width: props.largeWidth }}>
        <div>
          <img
            src={require("../../Images/blogPostImages/" + props.images[0])}
          />
        </div>
      </section>

      <section className="sideImageWrapper" style={{ width: props.smallWidth }}>
        <SideImage
          height={props.sideImageHeight}
          src={require("../../Images/blogPostImages/" + props.images[1])}
        />
        <SideImage
          height={props.sideImageHeight}
          src={require("../../Images/blogPostImages/" + props.images[2])}
        />
        <SideImage
          height={props.sideImageHeight}
          src={require("../../Images/blogPostImages/" + props.images[3])}
        />
      </section>
    </div>
  );
};

const Home = (props) => {
  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + "px",
    overflow: "hidden",
  };

  const sideImageHeight = galleryHeight / 3;
  const imgAr = blogData.data.map((post) => post.blogImage);
  return (
    <div>
      <Card>
        <ImageGallery
          largeWidth="70%"
          smallWidth="30%"
          sideImageHeight={sideImageHeight}
          galleryStyle={galleryStyle}
          images={imgAr}
        />
      </Card>
      <Layout>
        <RecentPosts />
      </Layout>
    </div>
  );
};
export default Home;
