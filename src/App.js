import React, { useState } from 'react';
import ClassCounter from './components/Counter/ClassCounter';
import Counter from './components/Counter/Counter';

function App() {
  const [value, setValue] = useState("Text in input")

  return (
    <div className="App">
    <ClassCounter/>
    </div>
  );
}

export default App;
