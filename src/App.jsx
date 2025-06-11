import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Name from './components/Name'
import Counter from './components/Counter'
import But from './components/But'
import User from './components/User'
import Product from './components/product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/name' element={<Name/>}/>
      <Route path='/count' element={<Counter/>}/>
      <Route path='/button' element={<But/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
    </>
  )
}

export default App
