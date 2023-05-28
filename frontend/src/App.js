import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
