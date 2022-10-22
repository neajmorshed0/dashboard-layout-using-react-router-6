import React from 'react';
import Sidebar from './components/Sidebar';
import Router from './routes';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Router />
    </div>
  );
};

export default App;
