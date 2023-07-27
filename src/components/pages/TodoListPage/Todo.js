import React, { useState } from 'react'
import TodoInput from './Todoinput'
import Todolist from './Todolist'
import Navbar from '../../generics/Navbar/Navbar';


function Todo() {


  const [listTodo, setListTodo] = useState([]);
  const [isEditItem] = useState([]);

  function formatDate(date) {
    // DD/MM/YYYY
    return '26/05/2023';
  }

  let addList = (inputText) => {

    if (inputText.trim() === '') {
      return;
    }

    const date = new Date();

    const todo = {
      title: inputText,
      completed: false,
      timestamp: formatDate(date)
    };

    setListTodo([...listTodo, todo]);

  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }

  const statusUpdate = (index) => {
    const _todo = [...listTodo];
    _todo[index].completed = !_todo[index].completed;
    setListTodo(_todo);
  }

  const updateTodo = (title, index) => {
    const _todo = [...listTodo];
    _todo[index].title = title;
    setListTodo(_todo);
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="main-container">
        <div className="center-container">
          <h1 className="app-heading"><center>-TODO-</center></h1>
          <TodoInput addList={addList} />

          {listTodo.map((listItem, i) => {
            return (
              <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} statusUpdate={statusUpdate} updateTodo={updateTodo} />
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Todo
