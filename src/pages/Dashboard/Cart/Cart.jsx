import { FaDeleteLeft } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {

    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((initialSum, item) => initialSum + item.price, 0)
    
    console.log(cart);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id, name) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
              
              axiosSecure.delete(`/carts/${id}`)
                  .then(res => {
                  console.log(res);
                      if (res.data.deletedCount > 0) {
                          refetch()
                      Swal.fire({
                        title: "Deleted!",
                        text: `${name} has been deleted.`,
                        icon: "success",
                      });
                        
                  }
              })
              console.log(id);
              
          }
        });
    }
    
    return (
      <div>
        <div className="w-1/2 m-auto">
          <h1 className="text-center text-orange-800 ">--- My Cart ---</h1>

          <div className="divider mb-[-5px]"></div>
          <h1 className="text-center text-2xl">WANNA ADD MORE?</h1>
          <div className="divider mt-[-5px]"></div>
        </div>

        <div className="bg-white mx-12 my-8 p-4 rounded-lg">
          <div className="flex justify-between ">
            <h2 className="text-3xl text-black">Items: {cart.length}</h2>
            <h2 className="text-3xl text-black">Total Price: {totalPrice}</h2>
            <button className="text-xl text-white btn bg-orange-800 btn-sm">
              Pay
            </button>
          </div>

          <div>
            <div className="overflow-x-auto">
              <table className="table mt-8 rounded-lg">
                {/* head */}
                <thead className="bg-orange-800  text-white ">
                  <tr className="">
                    <th className="">
                      <label></label>
                    </th>
                    <th>Item Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {cart.map((item) => (
                    <>
                      <tr>
                        <th>
                          <label>
                            <h1>{cart.indexOf(item) + 1}</h1>
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="w-16 rounded">
                                <img src={item.image} />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <th>
                          <button onClick={()=>handleDelete(item._id, item.name)} className="btn btn-ghost btn-xs text-red-700 text-xl">
                            <FaTrash ></FaTrash>
                          </button>
                        </th>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}; 

export default Cart;