import React, { useState } from 'react';
import ToDo from './components/ToDo.jsx';
import ToDoForm from './components/ToDoForm';

export default function App() {
  const [todos, setTodos] = useState([]);
  // onChange={}

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo },
      ),
    ]);
  };

  const localStorage = window.localStorage

  return (
    <div>
      <div className="flex mt-40 mb-20 items-center justify-center">
        <div className="drop-shadow-2xl min-h-40 bg-blue-400 p-3 rounded-xl">
          <h3 className="text-center text-xl p-3 text-white">Things to do: {todos.length}</h3>
          <ToDoForm addTask={addTask} />
          <div>
            <ul>
              {todos.map((todo) => {
                return (
                  <ToDo todo={todo} key={todo.id} toggleTask={handleToggle} removeTask={removeTask} />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
