import React from 'react';

import Header from '../Header';
import Filter from '../Filter';
import List from '../List';
import AddItem from '../AddItem';

import './App.css';

const App = () => {
  
  const todoData = [
    {
      id: 1,
      title: 'Սովորել React',
      important: true
    },
    {
      id: 2,
      title: 'Կոֆե խմել',
      important: false
    },
    {
      id: 3,
      title: 'Սովորել Node.js',
      important: true
    },
    {
      id: 4,
      title: 'Հաց ուտել',
      important: false
    }
  ];

  return (
    <div className="container">
      <Header />
      <Filter />
      <List todoList={todoData} />
      <AddItem />
    </div>
  );
};

export default App;