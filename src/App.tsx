import React from 'react';
import './App.css';
import { Routes } from './components/Routes';
import { Menu } from './components/menu/menu';

export const App = () => {
  return (
    <div>
      <Menu></Menu>
      <Routes></Routes>
    </div>
  );
};

export default App;
