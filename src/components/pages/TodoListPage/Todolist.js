import React, { useState } from 'react'

import styles from './Todo.module.css';

function Todolist(props) {

  const { index, item, deleteItem, statusUpdate, updateTodo } = props;

  const [editId, setEditId] = useState(null);
  const [todoValue, setTodoValue] = useState(item.title);

  function handleUpdateControlClick(){
    updateTodo(todoValue, index);
    setEditId(null);
  }

  let todoLabelClassName = styles.todoLabel;

  if (item.completed) {
    todoLabelClassName += `${styles.complete}`;
  }

  return (
    <div className={styles.todoItemContainer}>
      {
        editId === null ? (
          <>
            <label className={todoLabelClassName}>{item.title}</label>
            <div className={styles.todoControlsContainer}>
              <button className={styles.todoItemControl} onClick={() => statusUpdate(index)}>{item.completed ? 'Undo' : 'Complete'}</button>
              <button className={styles.todoItemControl} onClick={() => setEditId(index)}>Edit</button>
              <button className={styles.deleteControl} onClick={() => deleteItem(index)}>Delete</button>
            </div>
          </>
        ) : (
          <>
            <input value={todoValue} className={styles.todoUpdateInputControl} autoFocus={true} onChange={(event) => setTodoValue(event.target.value)} />
            <div className={styles.todoControlsContainer}>
              <button className={styles.todoItemControl} onClick={handleUpdateControlClick}>Update</button>
              <button className={styles.deleteControl} onClick={() => setEditId(null)}>Cancel</button>
            </div>
          </>
        )
      }

    </div>
  )
}

export default Todolist
