import React from 'react';
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Index from './view/index'
import store from './store'

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Route exact path="/" component={Index}/>
      </Provider>
    </div>
  );
}

export default App;
