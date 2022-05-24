import React, { useRef, useState } from 'react';
import ClassCounter from './components/Counter/ClassCounter';
import Counter from './components/Counter/Counter';
import PostForm from './components/PostForm/PostForm';
import PostItem from './components/PostItem/PostItem';
import PostList from './components/PostList/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },

  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length !== 0
        ? 
        <PostList remove={removePost} posts={posts} title="Posts of JS"/>
        : 
        <h1 style={{textAlign: "center", color: "teal"}}>
          No posts found
        </h1>
      }      
    </div>
  );
}

export default App;
