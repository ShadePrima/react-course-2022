import React, { useState } from 'react';
import ClassCounter from './components/Counter/ClassCounter';
import Counter from './components/Counter/Counter';
import PostItem from './components/PostItem/PostItem';
import './styles/App.css'

function App() {
  const [value, setValue] = useState("Text in input")

  return (
    <div className="App">
      <PostItem/>
      <PostItem/>
      <PostItem/>
    </div>
  );
}

export default App;
