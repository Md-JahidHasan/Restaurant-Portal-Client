import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ image, name, title, price, item, _id }) => {


  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()

  const [, refetch] = useCart();


  const handleOrderCart = (menu) => {
    if (user && user.email) {

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem)
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart!`,
            showConfirmButton: false,
            timer: 500,
          });
          refetch()
          
        
      });

    } else {

      Swal.fire({
        title: "You are not Logged In",
        text: "Are you want to login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
          <button
            onClick={() => handleOrderCart(item)}
            className="btn btn-primary"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
