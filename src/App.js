import React, { useRef, useState } from 'react';
import ClassCounter from './components/Counter/ClassCounter';
import Counter from './components/Counter/Counter';
import PostForm from './components/PostForm/PostForm';
import PostItem from './components/PostItem/PostItem';
import PostList from './components/PostList/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aa", body: "cc" },
    { id: 2, title: "bb", body: "bb" },
    { id: 3, title: "cc", body: "aa" },
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
 
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="sorting"
          options={[
            {value: "title", name: "By name"},
            {value: "body", name: "By discription"},
          ]} 
        />
      </div>
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
