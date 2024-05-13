import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import TodoItem from "./TodoItem"

const Home = () => {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [tasks, setTasks] = useState([])
const [refresh, setRefresh] = useState(false) 


const submitHandler=(e)=>{
  e.preventDefault()
  axios.post('https://backend-todo-xg9j.onrender.com/api/v2/task/new',{
    title,
    description
  },{
    withCredentials: true,
    headers:{ 
      "Content-Type" : "application/json",  
    },
  }).then((res)=>{
    toast.success(res.data.message)
    setRefresh((prev)=>{
      return !prev
    })
  }).catch((error)=>{
    console.log(error)
    toast.error(error.response.data.message)
  })
  setTitle('')
  setDescription('')
}

useEffect(()=>{
  axios.get('https://backend-todo-xg9j.onrender.com/api/v2/task/my',{
    withCredentials:true
  }).then((res)=>{
    setTasks(res.data.task)
  }).catch((error)=>{
    console.log(error)
  })
},[refresh])


const deleteHandler=(id)=>{
  axios.delete(`https://backend-todo-xg9j.onrender.com/api/v2/task/${id}`,{
    withCredentials:true
  }).then((res)=>{
    toast.success(res.data.message)
    setRefresh((prev)=>{
      return !prev
    })
    
  }).catch((error)=>{
    console.log(error)
    toast.error(error.response.data.message)
  })
}

const changeHandler=(id)=>{
  axios.put(`https://backend-todo-xg9j.onrender.com/api/v2/task/${id}`,{
    withCredentials: true
  }).then((res)=>{
    toast.success(res.data.message)
    setRefresh((prev)=>{
      return !prev
    })
  }).catch((error)=>{
    console.log(error)
    toast.error(error.response.data.message)
  })
}




  return (
    <section>
    <div className="home_main">
      <form onSubmit={submitHandler}>
      <div className="inp_main1">
        <input type="text" placeholder="Title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div className="inp_main1">
        <input type="text" placeholder="Description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </div>
        <button className="btn2">Add Task</button>
      </form>
    </div>
    <main>
      {
        tasks.map((e,index)=>(
          <div key={index} className="task_main">
            <TodoItem 
              title = {e.title}
              description = {e.description}
              isCompleted = {e.isCompleted}
              id = {e._id}
              deleteHandler={deleteHandler}
              changeHandler={changeHandler}
            />
          </div>
        ))
      }
    </main>
    </section>
  )
}

export default Home