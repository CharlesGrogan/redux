import React from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';
import './App.min.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="wrapper">
      <Postform />
      <hr />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
