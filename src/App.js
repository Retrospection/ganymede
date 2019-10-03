import React from 'react';
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import RouterPage from './view/router'
import store from './store'

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Route path="/" component={RouterPage}/>
      </Provider>
    </div>
  );
}

export default App;
