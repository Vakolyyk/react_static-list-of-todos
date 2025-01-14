import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList';

const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList
      todos={preparedTodos}
    />
  </div>
);

export default App;
