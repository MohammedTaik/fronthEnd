
import React, { useState } from "react";
import Add from "./Input";
import Header from "./Header";
import Tasks from "./Tasks";

const Todo = () =>{
    const [input,setInput] = useState("");
    const [todos,setTodos] = useState([]);
    const [editTodo, setEditTodo ] =useState (null);

    return(
        <div>
         <Header/>

         <Add
         input={input}
         setInput={setInput}
         todos={todos}
         setTodos={setTodos}
         setEditTodo={setEditTodo}
         editTodo={editTodo}
         />

         <Tasks
         todos={todos}
         setTodos={setTodos}
         setEditTodo={setEditTodo}
          />
      </div>
    );
 
}
export default Todo
