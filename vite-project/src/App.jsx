import './App.css'
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAdd(todo){
    setTodos([...todos, todo]);
  }

  function handleDelete(todoIndex){
    const updatedTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(updatedTodos);
  }

  return (
    <div>
       <h1>Todo App</h1>
       <Form onAdd={handleAdd} />
       <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => handleDelete(index)} >Delete</button>
          </li>
        ))}
       </ul>
    </div>
  );
}

function Form({onAdd}){
  const [text, setText] = useState('');

  return(
    <div>
       <label>
        Add todo: 
        <input type="text"
        value= {text}
        onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button onClick={ () => onAdd(text)}>Add</button>
    </div>
  );
}

export default App