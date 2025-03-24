import React, { useEffect, useState } from 'react'
import { TodoProvider } from './Context/TodoContext.js'
import TodoForm from './Components/TodoForm.jsx'
import TodoItem from './Components/TodoItem.jsx'
export default function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (
      prevTodo.id === id ? todo : prev)))
  }

  const deleteTodo = (id) => {
    // setTodos((prev) =>prev.map((prevTodo) =>prevTodo.id === id ? [] : prevTodo));
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  }

  const toggleComplete = (id) => {
    // setTodos((prev)=>prev.map((prevTodo)=>{
    //   if(prevTodo.complete)
    //   {
    //     prev.complete=true;
    //   }
    //   else
    //   {
    //     prevTodo.complete=false;
    //   }
    // }))
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todo'))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo,) => {
              return (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo} />
                </div>
              )
            })}
              </div>
        </div>
        </div>
    </TodoProvider>
  )
}
