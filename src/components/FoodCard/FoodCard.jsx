

const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-slate-900 text-white absolute top-4 right-4 px-4">${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-outline border-0 border-b-2 bg-slate-100 text-orange-400 hover:text-orange-400">Add to Card</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;