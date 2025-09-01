import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookie from "js-cookie"


const baseQuery = fetchBaseQuery({

    baseUrl: import.meta.env.VITE_BASE_URL,
    credentials:"include",

    prepareHeaders:(headers)=>{

        const token = Cookie.get("accessToken")
        if(token){
        headers.set("Authorization" ,`Bearer ${token}`)
        }

        return headers
       
    }
})


const  baseQueryWithreauth = async (arg ,api ,extraOptions)  =>{

   let result = await baseQuery(arg ,api ,extraOptions) 

  if(result?.error?.status == 403){

    const refreshResult = await baseQuery({
        url:"/auth/refreshToken" ,
        method:"GET",
    },
     api,
    extraOptions
        )

        if(refreshResult?.data){
            const NewAccessToken = refreshResult?.data?.accessToken
            Cookie.set("accessToken" ,NewAccessToken)

            result = await baseQuery(arg ,api ,extraOptions) 
        }else {
         console.log("Refresh token failed, user must login again")
        }
   }

return result

}


export const apiSlice = createApi({
    baseQuery:baseQueryWithreauth,
    endpoints: () => ({}), 

    
})








