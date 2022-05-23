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

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")



  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }
  


  return (
    <div className="App">
      <form>
        <MyInput
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text" 
        placeholder="Name post"      
        />

        <MyInput 
        value={body}
        onChange={e => setBody(e.target.value)}
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
