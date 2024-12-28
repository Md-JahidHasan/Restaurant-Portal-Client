import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const UpdateItem = () => {
    const image_HOSTING_KEY = import.meta.env.VITE_image_hostingKey;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_HOSTING_KEY}`;
    const menu = useLoaderData();
console.log( menu);

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const [image, setImage] = useState(menu.image)
    
    const onSubmit = async (data) => {
      // image upload to imageBB and then get an url
      const imageFile = { image: data.image[0] };

      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
        if (res.data.success) {
          setImage(res.data.data.display_url)
        const menuItem = {
          name: data.recipeName,
          recipe: data.recipeDetails,
          image: res.data.data.display_url,
          price: parseFloat(data.price),
          category: data.category,
        };
        const menuAddedRes = await axiosSecure.patch(`/menu/${menu._id}`, menuItem);
        if (menuAddedRes.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.recipeName} has been saved`,
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      }
      console.log(res.data);
    };
    
    return (
      <div>
        <SectionTitle heading="Update Item"></SectionTitle>

        <div>
          <form
            className="m-4 bg-slate-100 p-4 md:mx-12 text-center rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="label">
              <span className="label-text">Pecipe Name*</span>
            </div>
            <input
              {...register("recipeName")}
              defaultValue={menu.name}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />

            <div className="grid grid-cols-2 gap-2 w-full">
              <div>
                <div className="label">
                  <span className="label-text">Category*</span>
                </div>
                <select
                  defaultValue={menu.category}
                  {...register("category")}
                  className="select select-info w-full "
                >
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="dissert">Dissert</option>
                  <option value="soup">Soups</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>
              <div>
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>

                <input
                  {...register("price", { required: true })}
                  defaultValue={menu.price}
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <input
              {...register("recipeDetails")}
              defaultValue={menu.recipe}
              type="text"
              placeholder="Recipe Details"
              className="input w-full h-32 input-bordered "
            />

            <div className="flex">
              <div className="flex-grow">
                <div className="label">
                  <span className="label-text">Change Image*</span>
                </div>
                <input
                  {...register("image")}
                  type="file"
                  className="file-input file-input-bordered w-full h-48"
                />
              </div>
              <div className="ml-8">
                <div className="label">
                  <span className="label-text">Items Image*</span>
                </div>
                <div className="avatar">
                  <div className="w-48 rounded">
                    <img src={image} />
                  </div>
                </div>
              </div>
            </div>


            {/* <input className="btn btn-warning w-48" type="submit"></input> */}
            <button className="btn btn-warning w-48">Update Item</button>
          </form>
        </div>
      </div>
    );
};

export default UpdateItem;