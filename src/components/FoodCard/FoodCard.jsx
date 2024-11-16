const FoodCard = ({ image, name, title, price }) => {
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="w-full" />
      </figure>
      <p className="absolute right-0 mr-4 bg-slate-800 shadow-md text-white px-2 py-1 m-2 rounded-md">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{title}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
