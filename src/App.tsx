import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import TodoPage from './pages/TodoPage';
import store from './store';
import { StyledLink } from './styled';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoPage />
      </div>
      <StyledLink><a href="" className='some-class'></a></StyledLink>
    </Provider>
  );
}

export default App;
