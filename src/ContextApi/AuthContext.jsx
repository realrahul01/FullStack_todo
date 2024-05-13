import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext()

const AuthProvider=({children})=>{
const [isAuth, setIsAuth] = useState(getInitialIsAuth)
const [loading, setLoading] = useState(false)
const [user, setUser] = useState({})
    
    
    function getInitialIsAuth(){
        return localStorage.getItem("isAuth") === "true"
    }
    
    useEffect(()=>{
        localStorage.setItem("isAuth", isAuth)
    },[isAuth])

    return(
        <AuthContext.Provider value={{isAuth, setIsAuth, loading, setLoading, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;