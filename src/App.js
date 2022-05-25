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
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts () {
    console.log('finished function')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }

  const sortedPosts = getSortedPosts()

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }
 
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>

      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search ..."
        />

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
        <PostList remove={removePost} posts={sortedPosts} title="Posts of JS"/>
        : 
        <h1 style={{textAlign: "center", color: "teal"}}>
          No posts found
        </h1>
      }      
    </div>
  );
}

export default App;
