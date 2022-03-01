import axios from "axios";
import React from "react";

const Tasks = ({todos , setTodos , setEditTodo }) =>{

    const handleDelete=({id})=>{
        setTodos(todos.filter((todo) => todo.id !== id));
        axios.delete('http://localhost:5000/api/Todo/'+id)
        .then(response => console.log('daleted'))
    }
    
    

    const handleComplete =(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    console.log(item.test , item.satatue)
                    if(item.statue === "not yet"){

                        var body ={
                            
                            "statue" : 'done                ' ,
                            "details" : item.details 
                            }
                        axios({
                            method :'put',
                            url :'http://localhost:5000/api/Todo/'+ item.id,
                            data : body
                            })
                            .then(response => {
                                }).catch(error =>{
                                    console.log(error)
                             })

                       item.statue = "done" 
                       
                    }else{
                        var body2 ={
                            
                            "statue" : "not yet" ,
                            "details" : item.details 
                            }
                        axios({
                            method :'put',
                            url :'http://localhost:5000/api/Todo/'+ item.id,
                            data : body2
                            })
                            .then(response => {
                                }).catch(error =>{
                                    console.log(error)
                             })
                       item.statue = "not yet"
                    }
                                  
                   }
                return item;

                } 
                
            )
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
              
               <input className={`list ${todo.statue.trim()==='done' ? "finish" :""}`}
               type="text"
               value={todo.details.trim()}
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