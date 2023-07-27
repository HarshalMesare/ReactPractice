import React, { useState } from "react";
import styles from './Todo.module.css'


function TodoInput(props) {
  const [inputText, setInputText] = useState('');
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText)
      setInputText("")
    }
  }
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.inputBoxTodo}
        placeholder="Enter your task"
        value={inputText}
        onChange={e => {
          setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className={styles.addBtn}
        onClick={() => {
          props.addList(inputText)
          setInputText("")
        }}>+</button>

    </div>
  );
}

export default TodoInput;