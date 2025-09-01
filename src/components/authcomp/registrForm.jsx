import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useRegisterMutation } from '../../Feutures/auths/authApiSlice'
import { useNavigate } from 'react-router-dom'
import WelcomeCelebration from '../sharing/welcome_celebration'
import { useDispatch , useSelector } from 'react-redux'
import { SetInfoUser } from '../../slices/userInfoSlice'





const RegistrForm = () => {

    const [valueForm ,setValueForm] = useState({
    Frist_Name :'' ,
    Last_Name :'' ,
    email:'' ,
    password:''
})
 
const userInfo = useSelector((state)=> state.UserInformation)
const dispatch = useDispatch()
const navigate = useNavigate()
const [register , {isError , error ,isLoading,isSuccess}] = useRegisterMutation()
const [showWelecom , setShowWelecome] = useState(false)


const onRegister = async (e)=>{

e.preventDefault() ;

try{

const {data} =  await register(valueForm)

  const accessToken = data.accessToken
   
  //
  if(accessToken){
   Cookies.set("accessToken",accessToken)

   setValueForm({
    Frist_Name :'' ,
    Last_Name :'' ,
    email:'' ,
    password:''
     })
     
   // set info user in redux
   dispatch(SetInfoUser({name: data.name , email:data.email}))
   // show welecome
   setShowWelecome(true)
     

   }
}catch(error){
   console.log(error)
 }


}


  return (
    <>
   {showWelecom &&  <WelcomeCelebration name={userInfo.UserName} onClose={()=> navigate('/Dashboard')}/>}

   {!showWelecom &&  
<form
  onSubmit={(e) => onRegister(e)}
  className="w-[360px] bg-gray-900 rounded-2xl shadow-2xl px-6 py-6 flex flex-col gap-5 border border-gray-800"
>
  <h1 className="text-2xl  sm:text-3xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-300 drop-shadow-lg">
    Create Account
  </h1>
  
   {error &&!isLoading && <p className='text-red-500'>    {error?.data?.message || "Something went wrong"}</p>}
   
<fieldset className="flex flex-col gap-1">
  <label htmlFor="firstName" className="text-gray-200 text-sm font-medium">
    First Name
  </label>
  <input
    type="text"
    id="firstName"
    name="firstName"
    value={valueForm.Frist_Name}
    onChange={(e) => setValueForm({ ...valueForm, Frist_Name: e.target.value })}
    required
    minLength={2}
    maxLength={20}
    pattern="[A-Za-z]+"
    title="First name must contain only letters"
    className="w-full p-2.5 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
    placeholder="Enter your first name"
  />
</fieldset>

<fieldset className="flex flex-col gap-1">
  <label htmlFor="lastName" className="text-gray-200 text-sm font-medium">
    Last Name
  </label>
  <input
    type="text"
    id="lastName"
    name="lastName"
    value={valueForm.Last_Name}
    onChange={(e) => setValueForm({ ...valueForm, Last_Name: e.target.value })}
    required
    minLength={2}
    maxLength={20}
    pattern="[A-Za-z]+"
    title="Last name must contain only letters"
    className="w-full p-2.5 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
    placeholder="Enter your last name"
  />
</fieldset>

<fieldset className="flex flex-col gap-1">
  <label htmlFor="email" className="text-gray-200 text-sm font-medium">
    Email
  </label>
  <input
    type="email"
    id="email"
    name="email"
    required
    value={valueForm.email}
    onChange={(e) => setValueForm({ ...valueForm, email: e.target.value })}
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    title="Enter a valid email address (e.g. user@example.com)"
    className="w-full p-2.5 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
    placeholder="Enter your email"
  />
</fieldset>

<fieldset className="flex flex-col gap-1">
  <label htmlFor="password" className="text-gray-200 text-sm font-medium">
    Password
  </label>
  <input
    type="password"
    id="password"
    name="password"
    value={valueForm.password}
    onChange={(e) => setValueForm({ ...valueForm, password: e.target.value })}
    required
    minLength={8}
    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    title="Password must be at least 8 characters, include letters and numbers"
    className="w-full p-2.5 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
    placeholder="Enter your password"
  />
</fieldset>

   
  <button
    type="submit"
    className="w-full py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 hover:shadow-lg transition duration-200"
  >
     {isLoading ? "...registering" : "register"}
  </button>

  <p className="text-xs text-gray-400 text-center mt-2">
    Already have an account?{" "}
    <Link to="/auth/signin" className="text-indigo-400 font-medium hover:underline">
      Sign in
    </Link>
  </p>
</form>



   }

   

    
    </>

  )
}

export default RegistrForm
