import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../ContextApi/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";


const Header = () => {
const [ismenu, setIsmenu] = useState(false)

const {isAuth, setIsAuth} = useContext(AuthContext)

const menuHandler=()=>{
    setIsmenu((prev)=>{
        return !prev
    })
}

const logoutHandler=()=>{
    axios.get('https://backend-todo-xg9j.onrender.com/api/v1/user/logout',{
        withCredentials: true
    }).then((res)=>{
        toast.success(res.data.message)
    }).catch((error)=>{
        console.log(error)
        toast.error(error.response.data.message)
    })
    setIsAuth(false)
}


  return (
        <nav>
            <div className="left_nav">
                <h2>Todo App</h2>
            </div>
            {ismenu && (
                <div className="menu_one">
                <ul>
                    <li><NavLink className="nav_links" to='/'>Home</NavLink></li>                    
                    <li><NavLink className="nav_links" to='/profile'>Profile</NavLink></li>                    
                    <li><NavLink className="nav_links" to='/login'>Login</NavLink></li>                    
                </ul>
            </div>
            )}
            <div className="right_nav">
                <ul>
                    <li><NavLink className="nav_link" to='/'>Home</NavLink></li>                    
                    <li><NavLink className="nav_link" to='/profile'>Profile</NavLink></li>  
                    {isAuth && (
                        <li><NavLink className="nav_link" to='/login' onClick={logoutHandler}>Logout</NavLink></li>                    
                    )}                  
                    {!isAuth && (
                        <li><NavLink className="nav_link" to='/login'>Login</NavLink></li>                    
                    )}
                </ul>
            </div>
            <div className="menu">
                {ismenu && (
                    <AiOutlineClose onClick={menuHandler}/>
                )}
                {!ismenu && (
                    <GiHamburgerMenu onClick={menuHandler}/>
                )}
            </div>
        </nav>
  )
}

export default Header