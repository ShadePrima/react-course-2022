import React, { useRef, useState } from 'react';
import ClassCounter from './components/Counter/ClassCounter';
import Counter from './components/Counter/Counter';
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

  const [post, setPost] = useState({title: '', body: ''})




  const addNewPost = (e) => {
    e.preventDefault()  
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})

  }
  


  return (
    <div className="App">
      <form>
        <MyInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value })}
        type="text" 
        placeholder="Name post"      
        />

        <MyInput 
        value={post.body}
        onChange={e => setPost({...post, body:e.target.value})}
        type="text" 
        placeholder="Post description"          
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts of JS"/>
    </div>
  );
}

export default App;
