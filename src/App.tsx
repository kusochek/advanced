import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import TodoPage from './pages/TodoPage';
import store from './store';
import { StyledLink } from './styled';

function App(): JSX.Element {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <div className="App" data-testid="appWrapper">
        <TodoPage />
      </div>
      <StyledLink data-testid="styledLink"><a href="" className='some-class'>Some text here</a></StyledLink>
      {isShow && <p>Hello I'm showing!</p>}
    </Provider>
  );
}

export default App;
