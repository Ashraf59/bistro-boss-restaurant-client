import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleAddToCard = (menuItem) =>{
      console.log(menuItem);
      if(user){
        fetch('http://localhost:5000/carts')
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Data successfully post',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })

      }

      else{
        Swal.fire({
          title: 'Please login to order the food',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Please login now'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login')
          }
        })
      }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-slate-900 text-white absolute top-4 right-4 px-4">${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-start">
      <button onClick={() => handleAddToCard(item)} className="btn btn-outline border-0 border-b-2 bg-slate-100 text-orange-400 hover:text-orange-400">Add to Card</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;