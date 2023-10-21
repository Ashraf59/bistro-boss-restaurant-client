import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const token = localStorage.getItem('access token');

    const handleDelete = item => {
      console.log(item._id)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/menu/${item._id}`, {
            method: 'DELETE',
            headers:{
              authorization: `bearer ${token}`
            }
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              refetch();
         
            }
          })
        }
      })
    }
    return (
        <div className="w-full">
            <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up"}></SectionTitle>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-center">
        <th>Serial No.</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody className="text-center">
      {
        menu.map((item, index) => <tr key={item._id}>
            <th>
             {index + 1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item.name}</div>
               
                </div>
              </div>
            </td>
            <td className="">
             {item.category}
            </td>
            <td>{item.price}</td>
            <td>
             <h2>dfdf</h2>
            </td>
            <td>
            <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
            </td>
          </tr>)
      }
      
     
    </tbody>

  </table>
</div>
        </div>
    );
};

export default ManageItems;