import './App.css'
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAdd(todo){
    setTodos([...todos, {text: todo, completed: false}]);
  }

  function handleDelete(todoIndex){
    const updatedTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(updatedTodos);
  }

  function handleToggle(todoIndex){
    const updatedTodos = todos.map((item, index) => {
      if(index === todoIndex){
        return {
          ...item,
          completed : !item.completed
        };
      }
      return item;
    })
    setTodos(updatedTodos);
  }

  return (
    <div>
       <h1>Todo App</h1>
       <Form onAdd={handleAdd} />
       <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <span 
            onClick = {() => handleToggle(index)}
            style={{textDecoration: item.completed? "line-through" : "none"
            }}>{item.text}</span>
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
      <button onClick={ () => {
        onAdd(text);
        setText('');
      }}>Add</button>
    </div>
  );
}

export default App