import { useSelector , useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import cookie from "js-cookie"
import LogOutBtn from "../components/sharing/logOutBtn"

const HomePage = () => {


  const accessToken = cookie.get("accessToken")


  return (

    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full py-6 px-6  backdrop-blur-md flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500">
          Authentication
        </h1>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
      
          {accessToken ?  
           <LogOutBtn></LogOutBtn>
          :  
         
                  <div className="flex flex-col sm:flex-row gap-6">
          <Link
            to="/auth/signin"
           className="px-14 py-4  bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500 text-white font-bold rounded-3xl shadow-lg text-xl transition duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/auth/register"
            className="px-14 py-4  bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500 text-white font-bold rounded-3xl shadow-lg text-xl transition duration-200"
          >
            Sign Up
          </Link>
         </div>
          }
        
       
      </div>
    </div>

  )
}

export default HomePage
