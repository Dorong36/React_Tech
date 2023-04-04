import { useCallback, useRef, useState, useReducer } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

// 랙(lag)을 발생시켜보쟈
function createBulkTodos() {
  const array = [];
  for(let i = 0; i < 2500; i++){
    array.push({
      id : i,
      text : `todo ${i}`,
      checked : false
    })
  }
  return array
}

function App() {

  // const [todos, setTodos] = useState([
  //   {
  //     id : 1,
  //     text : '1111',
  //     checked : true
  //   },
  //   {
  //     id : 2,
  //     text : '222',
  //     checked : true
  //   },
  //   {
  //     id : 3,
  //     text : '3333',
  //     checked : false
  //   },
  // ]);

  const [todos, setTodos] = useState(createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501)

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false
      }
      setTodos(todos => todos.concat(todo));
      nextId.current += 1; // nextId 1씩 늘리기
    }
  , [])

  const onRemove = useCallback(
    (id)=>{
      setTodos(todos => todos.filter(todo => todo.id !== id))
  }, [])

  const onToggle = useCallback(
    id => {
      setTodos( todos =>
        todos.map(todo => 
          todo.id === id ? {...todo, checked : !todo.checked} : todo
        )
      )
    }
  , [])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos = {todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
    </TodoTemplate>
  );
}

export default App;
