import React from "react";

const Tasks = ({todos , setTodos , setEditTodo }) =>{

    const handleDelete=({id})=>{
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    
    const handleComplete =(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return{
                        ...item,completed :!item.completed
                    }
                } 
                return item;
            })
        )
    }



   const handleEdit =({id}) =>{
       const findTodo = todos.find((todo) => todo.id ===id);
       setEditTodo(findTodo);
   }
   
    return(
    <div>

      {todos.map((todo)=>(
 
           <div className="task" key={todo.id}>
   
               <button className="buttonEdit" onClick={()=>handleEdit(todo)}><h6>Edit</h6></button>
              
               <input className={`list ${todo.completed ? "finish" :""}`}
               type="text"
               value={todo.task}
               onChange={(event) => event.preventDefault()}
               />
          <div>
                 <span className="icon-trash icon"  onClick={() =>handleDelete(todo)}> </span>
            
                 <span className="icon-file_done icon" onClick={() =>handleComplete(todo)}> </span>
          </div> 
          </div>
 
      )
      )}
   
    </div>
      
    );
   
}

export default Tasks