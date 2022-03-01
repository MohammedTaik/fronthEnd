
import React, { useEffect, useState } from "react";
import Add from "./Input";
import Header from "./Header";
import Tasks from "./Tasks";
import axios from "axios";


const Todo = () =>{
    
    const [input,setInput] = useState("");
    const [todos,setTodos] = useState([]);
    const [editTodo, setEditTodo ] =useState (null);

    useEffect(()=>{
        
            axios({
                method:'get',
                url:"http://localhost:5000/api/Todo",
                dataType: "json",
               
            }).then((reponse)=>{
                 console.log(reponse.data) 
                setTodos(reponse.data) 
               
            })
    },[setTodos]
    )
   
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
