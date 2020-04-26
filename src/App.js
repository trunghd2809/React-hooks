import React, { useState } from 'react';
import './App.scss';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import Posts from './components/Posts';
import Clock from './components/Clock';
import Hero from './components/Hero';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'I Love Easy FrontEnd' },
    { id: 2, title: 'We Love Easy FrondEnd' },
    { id: 3, title: 'They love Eassy FrondEnd' },
  ]);
  const handleOnClick = (todo) => {
    const index = todos.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  const handleSubmit = (obj) => {
    const todo = {
      id: todos.length + 1,
      ...obj,
    };
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  const [count, setCount] = useState(0);
  function test() { };
  const data = {};
  return (
    <div className='app'>
      <h1>React Hooks</h1>
      <ToDoForm onSubmit={handleSubmit} />
      <ToDoList todos={todos} onToDoClick={handleOnClick} />
      <h1>Use Effect</h1>
      <Posts />
      <Clock />
      <p>count {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Hero name='trung' data={data} />
    </div>
  );
}
export default App;
