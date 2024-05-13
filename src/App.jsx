import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Profile from './component/Profile'
import Login from './component/Login'
import Register from './component/Register'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './ContextApi/AuthContext'


function App() {  






  return (
    <>
    <AuthProvider>

      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
      <Toaster/>
    </AuthProvider>
    </>
  )
}

export default App
