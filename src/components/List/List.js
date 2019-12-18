import React from 'react';

import ListItem from '../ListItem';

import './List.css';

const List = ({ todoList }) => {

  const elements = todoList.map((list) => {
    return <ListItem label={list} key={list.id} />
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default List;