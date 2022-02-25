import React, { useEffect } from "react";
import {v4 as uuidv4} from "uuid";

const Add =({input , setInput ,todos,setTodos ,setEditTodo ,editTodo})=>{
    const  updateTodo =(task , id , completed)=>{
        const newTodo = todos.map((todo)=>
            todo.id === id ? {task , id ,completed} : todo
       );
       setTodos(newTodo);
       setEditTodo("");
    }
     const onInputChange = (event) =>{
         setInput(event.target.value);
     };

     useEffect(()=>{
        if(editTodo) {
            setInput(editTodo.task);
        } else {
            setInput("");
        }
     },[setInput,editTodo]);

     const onClickSubmit = (event) =>{
         event.preventDefault();
         if(!editTodo){
         setTodos([...todos,{id: uuidv4(), task: input , completed: false}]);
         setInput("");
        }else{
            updateTodo(input , editTodo.id ,editTodo.completed)
        }
     };

    return(
        <div>
        
        <form onSubmit={onClickSubmit}>

          <input   lang="ar"  type="text"  
          placeholder="Task to be done.."  required
          value={input}
          onChange={onInputChange}
         />
          <button className="icon-plus" type="submit"
          
          >
          </button>
        </form>

        </div>
    );

}
export default Add 