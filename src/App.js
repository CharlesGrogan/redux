import React from 'react';
import Posts from './components/Posts';
import Postform from './components/PostForm';
import Header from './components/Header'
import './App.min.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="wrapper">
      <Header />
      <Postform />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
