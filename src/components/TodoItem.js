// src/components/TodoItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../store/todosSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        title: editedTitle,
        description: editedDescription,
        status: todo.status,
        priority: todo.priority,
      })
    );
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleMarkAsDone = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        status: 'Done', // Change the status to 'Done'
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border rounded-md py-2 px-3 mb-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="border rounded-md py-2 px-3 mb-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
          ></textarea>
          <div className="flex justify-end">
            <button
              onClick={handleSaveEdit}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mr-2"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <div>
          <h3 className="text-lg font-bold mb-1">{todo.title}</h3>
          <p className="text-gray-600 mb-2">{todo.description}</p>
          <div className="flex items-center mb-2">
            <span className={`mr-2 ${getStatusColor(todo.status)}`}>{todo.status}</span>
            <span className={`mr-2 ${getPriorityColor(todo.priority)}`}>{todo.priority}</span>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleMarkAsDone}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 mr-2"
            >
              Mark as Done
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Done':
      return 'text-green-500';
    case 'In Progress':
      return 'text-yellow-500';
    default:
      return 'text-gray-500';
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high':
      return 'text-red-500';
    case 'medium':
      return 'text-yellow-500';
    default:
      return 'text-green-500';
  }
};

export default TodoItem;
