import {Routes ,Route, Navigate } from "react-router-dom"
import Register from './Page/auth/register'
import Singin from './Page/auth/singin'
import HomePage from "./Page/HomePage"
import Layout from "./Page/auth/LayoutAuth"
import Dashboard from "./Page/dashboard/Dashboard"
import './App.css'
import RequireAuth from "./components/authcomp/RequireAuth"
function App() {
  return (
         <Routes>
          
           <Route path='/' element={ <HomePage/> } ></Route>
           <Route path='/Dashboard' element={<RequireAuth elementReplace={<Singin/>}><Dashboard/></RequireAuth>} ></Route>

           <Route path="auth" element={<Layout/>}>
           <Route path='signin' element= {<RequireAuth elementReplace={<Singin/>}><Dashboard/></RequireAuth>} />
           <Route path='register' element={<RequireAuth elementReplace={<Register/>}><Dashboard/></RequireAuth>} />
           </Route>

          </Routes>

  
  )
}

export default App
