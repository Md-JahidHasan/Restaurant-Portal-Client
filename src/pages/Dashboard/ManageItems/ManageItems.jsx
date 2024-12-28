import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    console.log(menu);

    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then ( async(result) => {
          if (result.isConfirmed) {
            
              const res = await axiosSecure.delete(`/menu/${id}`);
              if (res.data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  refetch()
              
              }
              
          }
        });
    }
    
    return (
      <div>
        <SectionTitle
          subHeading="Hurry Up!"
          heading="MANAGE ALL ITEMS"
        ></SectionTitle>
        <div>
          <div className="overflow-x-auto m-4 shadow-md rounded-md md:rounded-t-xl">
            <table className="table">
              {/* head */}
              <thead className="bg-orange-800 text-white ">
                <tr>
                  <th>#</th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {menu.map((item, index) => (
                  <tr key={item._id}>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td> ${item.price}</td>
                    <td>
                      <Link to={`/dashboard/updateItem/${item._id}`} className="btn btn-ghost btn-xs">
                        <FaEdit className="text-xl text-orange-500"></FaEdit>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaTrash className="text-xl text-red-700"></FaTrash>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default ManageItems;