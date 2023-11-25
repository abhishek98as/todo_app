// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todosSlice';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [status, setStatus] = useState('Not Yet Started');

  const handleAddTodo = () => {
    dispatch(addTodo({ title, description, status, priority }));
    setTitle('');
    setDescription('');
    setPriority('medium');
    setStatus('Not Yet Started');
  };

  return (
    <div className='box-border h-900 w-100 p-5 x-50'>
    <div className="bg-white p-4 rounded-md shadow-md mb-4 box-content h-50 w-50 border-4 ...">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border rounded-md py-2 px-3 mb-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border rounded-md py-2 px-3 mb-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
      ></textarea>

      <div className='flex flex-row'>
      <div className="flex items-center mb-2">
        <label className="mr-2">Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border rounded-md py-2 px-3 mr-4 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="flex items-center mb-2">
        <label className="mr-2">Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="Not Yet Started">Not Yet Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white ml-4 py-1 px-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 "
      >
        Add Todo
      </button>

      </div>
    </div>
    </div>
  );
};

export default TodoForm;
