import React from "react";
import blogData from "../data/blog";
import Header from './Header'
import About from './About'
import ArticleList from './ArticleList'
console.log(blogData);

function App({name}) {
  return (
    <div className="App">
      <Header name={name} />
      <About image={blogData.image} name={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
