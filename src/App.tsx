import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import TodoPage from './pages/TodoPage';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoPage />
      </div>
    </Provider>
  );
}

export default App;
