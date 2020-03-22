import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Question } from './pages';

function App() {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/question" component={Question} exact />
    </>
  );
}

export default App;
