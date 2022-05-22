import React, { useState } from 'react';
import ClassCounter from './components/Counter/ClassCounter';
import Counter from './components/Counter/Counter';
import PostItem from './components/PostItem/PostItem';
import PostList from './components/PostList/PostList';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },

  ])

  const [posts2, setPosts2] = useState([
    { id: 1, title: "Python", body: "Description" },
    { id: 2, title: "Python2", body: "Description" },
    { id: 3, title: "Python3", body: "Description" },

  ])


  return (
    <div className="App">
      <PostList posts={posts} title="Posts of JS"/>
      <PostList posts={posts2} title="Posts of Python"/>
    </div>
  );
}

export default App;
