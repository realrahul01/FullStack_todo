import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import axios from 'axios'
import toast from "react-hot-toast"
import { AuthContext } from "../ContextApi/AuthContext"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setIsAuth, loading, setLoading} = useContext(AuthContext)

  const navigate = useNavigate()


const submitHandler=(e)=>{
  e.preventDefault()
  setLoading(true)
  axios.post('https://backend-todo-xg9j.onrender.com/api/v1/user/login',{
    email,
    password
  },{
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials:true
  }).then((res)=>{
    toast.success(res.data.message)
    setIsAuth(true)
    setLoading(false)
    navigate('/')
  }).catch((error)=>{
    console.log(error)
    toast.error(error.response.data.message)
    setLoading(false)
  })
}


  return (
    <div className="login">
      <form onSubmit={submitHandler}>
      <div className="inp_main">
        <input type="email" placeholder="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className="inp_main">
        <input type="password" placeholder="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
        <button disabled={loading} className="btn1">Login</button>
        <h4>Or</h4>
       <div>
       <NavLink to='/register'>Sign Up</NavLink>
       </div>
      </form>
    </div>
  )
}

export default Login