import React from 'react'
import "./App.css"
import Todo from './components/pages/TodoListPage/Todo'
import { About } from './components/About'
import LoginPage from './components/pages/LoginPage/LoginPage'
import Home from './components/pages/Home/Home'
import Table from './components/pages/TodoListPage/Table'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/about" element={<About />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App