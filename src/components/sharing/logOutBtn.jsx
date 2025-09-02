import { useLogOutMutation } from "../../Feutures/auths/authApiSlice";
import { useNavigate } from "react-router-dom";
import cookies from "js-cookie";

const LogOutBtn = () => {


const [LogOut] = useLogOutMutation()
 const Navigate = useNavigate()
 
 const handleLogOut =  ()=>{

   LogOut()
   cookies.remove("accessToken")
   Navigate("/auth/signin")
 console.log("logout")
   
  }


  return (
        <button type="button"  onClick={handleLogOut} className="bg-black p-2 px-5 text-white hover:bg-stone-950 rounded-3xl">
          Logout
        </button>
  )
}

export default LogOutBtn
