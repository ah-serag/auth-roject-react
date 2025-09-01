import { apiSlice } from "../../api/apiSlice";


const  authApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=> ({
      GetAllUsers : builder.query({
            query:()=>({
                url:"/users/getAllUsers",
                method:'GET',
            })
        }),



    })
})



export const {useGetAllUsersQuery } = authApiSlice


