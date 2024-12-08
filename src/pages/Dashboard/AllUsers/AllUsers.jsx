import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data:users=[], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data; 
        }
    })
   
    

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${user.name} is now an Admin!`,
                      showConfirmButton: false,
                      timer: 1000,
                    });
                    refetch();
                }
            
        })
    }


    const handleDelete = (user) => {
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
          axiosSecure.delete(`/users/${user._id}`).then((res) => {
            console.log(res);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `${user.name} has been deleted.`,
                icon: "success",
              });
            }
          });
          console.log(user.id);
        }
      });
    };


    return (
      <div>
        <div className="w-1/2 m-auto">
          <h1 className="text-center text-orange-800 ">--- How Many?? ---</h1>

          <div className="divider mb-[-5px]"></div>
          <h1 className="text-center text-2xl">MANAGE ALL USERS</h1>
          <div className="divider mt-[-5px]"></div>
        </div>

        <div className="bg-white mx-12 my-8 p-4 rounded-lg">
          <div className="flex justify-between ">
            <h2 className="text-2xl text-black">Total Users: {users.length}</h2>
            <h2 className="text-3xl text-black"> </h2>
          </div>

          <div>
            <div className="overflow-x-auto">
              <table className="table mt-2 rounded-lg">
                {/* head */}
                <thead className="bg-orange-800  text-white ">
                  <tr className="">
                    <th className="">
                      <label></label>
                    </th>
                    <th>Users Name</th>
                    <th>Users Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {users.map((user, index) => (
                    <>
                      <tr >
                        <th>
                          <label>
                            <h1> {index + 1}</h1>
                          </label>
                          
                        </th>
                        <td>
                          <div className="">
                            <p>{user.name}</p>
                          </div>
                        </td>
                        <td>{user.email}</td>
                        <th>
                                  {
                                      user?.role == 'admin'? <p>Admin</p>: <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn btn-ghost bg-orange-600 text-white hover:text-orange-900 text-xl"
                          >
                            <FaUsers></FaUsers>
                          </button>
                          }
                        </th>
                        <th>
                          <button
                            onClick={() => handleDelete(user)}
                            className="btn btn-ghost bg-red-700 text-white hover:text-red-800 text-xl"
                          >
                            <FaTrash></FaTrash>
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

export default AllUsers;