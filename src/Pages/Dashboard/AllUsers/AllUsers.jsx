import { useQuery } from "@tanstack/react-query";

import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";



const AllUsers = () => {

  const token = localStorage.getItem('access token');
  console.log(token)
 const {data: users = [], refetch} = useQuery({
  queryKey: ['users'],
  
  queryFn: async() => {
    const res = await fetch('http://localhost:5000/users',{
     
      headers:{
        authorization: `bearer ${token}`
      }
    });
    const data = await res.json();
   
    console.log(data)
    return data;
   
  } 
 
 })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH',
            headers:{
              authorization: `bearer ${token}`
          }
        })
        
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })

            }
        })

    }
    const handleDelete = user => {

    }
    return (
       
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
         <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
         <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
 
        {users?.map((user, index) =>  <tr key={user._id}>
         
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
            {
            user.role === 'admin' ? 'admin' :  <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-orange-600 text-white"><FaUserShield></FaUserShield></button>
            }
            </td>
        <td>
        <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
      </td>
      </tr>)}
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;