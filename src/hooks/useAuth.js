import { useContext } from "react"
import { AuthContext } from "../components/Authprovider/Authprovider"



const useAuth=()=>{
   return  useContext(AuthContext);
}
export default useAuth;