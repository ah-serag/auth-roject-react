import { useSelector } from "react-redux";
import { useGetAllUsersQuery } from "../../Feutures/users/usersSlice";
import LogOutBtn from "../../components/sharing/logOutBtn";

export default  function  WelcomeDashboard() {
   
  const { data: users , isError, error, isLoading } =  useGetAllUsersQuery();
  const userInfo = useSelector((state) => state.UserInformation);
  const firstLetter = userInfo.UserName ? userInfo.UserName.charAt(0).toUpperCase() : "?";


  return (
    <div className=" min-h-screen flex pt-5 flex-col items-center justify-start bg-white py-2 px-2">
      {/* // logo */}
      <div className="w-full flex justify-end p-2 ">
        <LogOutBtn/>
      </div>
      <div className="w-30 h-30 rounded-full bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 flex items-center justify-center shadow-2xl mb-4">
        <span className="text-6xl font-bold text-white drop-shadow-lg">
          {firstLetter}
        </span>
      </div>
       {/* // name */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
       {userInfo.UserEmail}
      </h2>

      {/* Welcome Dashboard */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-gray-900 drop-shadow-md mb-10">
        Welcome Dashboard
      </h1>
        

      {/* جدول المستخدمين */}
      <div className="w-full max-w-4xl overflow-x-auto">
        {isLoading && <p className="text-gray-500 text-center">Loading users...</p> }
        {error && !isLoading &&  <p className="text-red-500 text-center">Error: {error?.data?.message || "Something went wrong"}</p>}  
       {!error && !isLoading &&
 <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 border-b border-gray-200">#</th>
                <th className="text-left p-3 border-b border-gray-200">First Name</th>
                <th className="text-left p-3 border-b border-gray-200">Last Name</th>
                <th className="text-left p-3 border-b border-gray-200">Email</th>
                <th className="text-left p-3 border-b border-gray-200">Created At</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="p-3 border-b border-gray-200">{index + 1}</td>
                  <td className="p-3 border-b border-gray-200">{user.Frist_Name}</td>
                  <td className="p-3 border-b border-gray-200">{user.Last_Name}</td>
                  <td className="p-3 border-b border-gray-200">{user.email}</td>
                  <td className="p-3 border-b border-gray-200">{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
       }
       
         
    
      </div>
    </div>
  );
}
