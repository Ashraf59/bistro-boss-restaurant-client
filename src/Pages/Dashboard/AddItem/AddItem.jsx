import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_image_Upload_Token;

const AddItem = () => {

  const { register, handleSubmit, reset } = useForm();
  const token = localStorage.getItem('access token');
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const onSubmit = data => {
   
    const formData = new FormData();
    formData.append('image', data.image[0])
    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
      if(imgResponse.success){
        const imgURL = imgResponse.data.display_url;
        const {name, price, category, recipe} = data;
        const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
        console.log(newItem)
        fetch("http://localhost:5000/menu", {
          method: 'POST',
          headers: {
            'content-type' : 'application/json',
            authorization: `bearer ${token}`
          },
          body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(result => {
          console.log(result)
          if(result.insertedId){
            reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Successfully Item saved in database',
              showConfirmButton: false,
              timer: 1500
            })
          }
         
        })

      }
    })
   
  };
 
  

    return (
        <div className="w-full px-10">
           <SectionTitle subHeading="What's New" heading="Add an Item"></SectionTitle>

           <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Recipe Name*</span>
    
  </label>
  <input type="text" placeholder="Recepe Name" {...register("name", {required: true, maxLength: 120})} className="input input-bordered w-full" />
  
</div>

<div className="flex">
<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Category*</span>
   
  </label>
  <select defaultValue={"Pick One"} {...register("category", {required: true})} className="select select-bordered">
    <option disabled>Pick One</option>
    <option>Pizza</option>
    <option>Soup</option>
    <option>Salad</option>
    <option>Dessert</option>
    <option>Drinks</option>
  </select>

</div>
<div className="form-control w-full ml-4">
  <label className="label">
    <span className="label-text">Price*</span>
    
  </label>
  <input type="text" placeholder="Type here" {...register("price", {required: true})} className="input input-bordered w-full" />
  
</div>
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">Recepe Details</span>
    
  </label>
  <textarea {...register("recipe", {required: true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
  
</div>
<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Image</span>
   
  </label>
  <input type="file" {...register("image", {required: true})} className="file-input file-input-bordered w-full" />

</div>
<input className="btn btn-sm mt-4" type="submit" value="Add Item" />
           </form>
        </div>
    );
};

export default AddItem;