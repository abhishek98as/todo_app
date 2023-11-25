// src/components/TodoList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTodos = todos.filter((todo) => {
    if (!todo) return false; // Skip undefined todos

    const searchTermLower = searchTerm.toLowerCase();
    return (
      (todo.title && todo.title.toLowerCase().includes(searchTermLower)) ||
      (todo.description && todo.description.toLowerCase().includes(searchTermLower))
    );
  });

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tasks"
          className="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300  mx-3"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md ml-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => setSearchTerm('')}
        >
          Clear
        </button>
      </div>
      <div>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
