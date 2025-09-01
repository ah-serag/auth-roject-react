
import { Navigate } from 'react-router-dom'
import cookie from 'js-cookie'
import Singin from '../../Page/auth/singin'

const RequireAuth = ({children ,elementReplace}) => {
 const accessToken = cookie.get("accessToken")
  return accessToken ? children :  elementReplace  ;
}

export default RequireAuth
