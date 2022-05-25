import React, { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter/PostFilter';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css'


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aa", body: "cc" },
    { id: 2, title: "bb", body: "bb" },
    { id: 3, title: "cc", body: "aa" },
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log('finished function')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
 
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />     
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts of JS"/>
      
        
    </div>
  );
}

export default App;
