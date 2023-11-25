// src/pages/index.js
import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Filter from '../components/Filter';
import { TodoProvider } from '../context/TodoContext'; // Correct import statement
import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../styles/globals.css';

const Home = () => {
  return (
    <Provider store={store}>
      <TodoProvider>
        <div className="container">
          <h1 className="text-4xl font-bold my-8 bg-blue-100 p-4 rounded-md shadow-md mx-auto text-center">Todo List</h1>
          <div className="todo-form">
            <TodoForm />
          </div>
          <div className="todo-list">
            <Filter />
            <TodoList />
          </div>
        </div>
      </TodoProvider>
    </Provider>
  );
};

export default Home;
