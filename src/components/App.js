// App.js
import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const { name, image, about, posts } = blogData;

  return (
    <div className="App">
      <Header blogName={name} />
      {/* Correct the prop name to imageSrc */}
      <About imageSrc={image} aboutText={about} />
      <ArticleList posts={posts} />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
