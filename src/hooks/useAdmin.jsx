import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
const {user, loading} = useContext(AuthContext);

const token = localStorage.getItem('access token');

const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !loading,
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`,
        {
           headers: {
            authorization: `bearer ${token}`
           } 
        })
        console.log('is admin response', res)
        return res.json();

    },


})

return[isAdmin, isAdminLoading]
}

export default useAdmin;