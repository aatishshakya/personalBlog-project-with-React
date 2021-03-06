import React from "react";
import Home from "./containers/Home";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./containers/ContactUs";
import Post from "./containers/Post";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/post/:slug" component={Post} />
        <Route path="/contactus" component={ContactUs} />
      </div>
    </Router>
  );
}

export default App;
