import axios from "axios"
import { useContext, useEffect } from "react"
import { AuthContext } from "../ContextApi/AuthContext"

const Profile = () => {
const {setUser,user} = useContext(AuthContext)  

  useEffect(()=>{
    axios.get('https://backend-todo-xg9j.onrender.com/api/v1/user/me',{
      withCredentials:true
    }).then((res)=>{
      console.log(res.data)
      setUser(res.data.user)
    }).catch((error)=>{
      console.log(error)
    })
  },[])


  return (

    <>
      <h1>Profile</h1>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
    </>
  )
}

export default Profile