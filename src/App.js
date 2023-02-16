import ButtonClick from "./comonents/header/button";
import Header from "./comonents/header/header";
import Form from "./comonents/form/form";
import { useState } from "react";

function App() {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState(["apple","banana","cat"])
  
  function createTodo(event){
          event.preventDefault()
          
          setTodos(oldTodos => {
            setTask('')
            return [...oldTodos, task]
          })
  }

    // function tryToCheckEnterKey(e){
    //   if(e.keyCode == 13){
    //     createTodo()
    //   }
    // }

    return (
    <div>
      <div>
        <h1>Todos app</h1>
        <form onSubmit={createTodo}>
        <input
            //onKeyDown={tryToCheckEnterKey}
            type="text" value={task} onChange={event => {
            setTask(event.target.value)
            }} 
          />
        {/* <button onClick={createTodo}> Create Todo</button> */}
        <button type="submit"> Create Todo</button>
        </form>
        <ul>

        {todos.map(todo => {
          return <li> {todo} </li> })
        }
          


        </ul>
      </div>
    </div>
  );
}

export default App;
