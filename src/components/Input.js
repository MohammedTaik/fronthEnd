import axios from "axios";
import React, { useEffect } from "react";


const Add =({input , setInput ,todos,setTodos ,setEditTodo ,editTodo})=>{

    const  updateTodo =(details , id , statue  )=>{
            const newTodo = todos.map((todo)=>(
            todo.id === id ? {details , id ,statue } : todo

        ));
       setTodos(newTodo);
       setEditTodo("");
       }

    const onInputChange = (event) =>{
           setInput(event.target.value);
         };

    useEffect(()=>{
        if(editTodo) {
            setInput(editTodo.details);
        } 
        },[setInput,editTodo]);

    const onClickSubmit = (event) =>{
         event.preventDefault();
         
         if(!editTodo){
           

            var body ={
                "id" :Math.floor(Math.random() * 10000),
                "statue" : "not yet",
                "details" : input ,

            }
            console.log(body.id)
            axios({
                method :'post',
               url :'http://localhost:5000/api/Todo',
               data : body
               })
                .then(response => {
                    console.log(response.data)
                    }).catch(error =>{
                        console.log(error)
                    })
            setTodos([...todos,body]);
            setInput("");

        }else{

            updateTodo(input , editTodo.id ,editTodo.statue ,editTodo.test)
            setInput("");
            
             var bod ={
                  
                 "statue" : editTodo.statue ,
                 "details" : input , 
   
                 }
                 console.log(bod)
                 console.log(typeof(editTodo.id))
             axios({
                 method :'put',
                 url :'http://localhost:5000/api/Todo/'+editTodo.id,
                 data : bod
                 })
                 .then(response => {
                     }).catch(error =>{
                         console.log(error)
                  })
            
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