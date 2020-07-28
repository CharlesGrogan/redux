import React from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';
import './App.min.css';

function App() {
  return (
    <div className="wrapper">
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
