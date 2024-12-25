import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const image_HOSTING_KEY = import.meta.env.VITE_image_hostingKey;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_HOSTING_KEY}`;
const AddItems = () => {

    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic()
    const onSubmit = async(data) => {
        console.log(data);

        // image upload to imageBB and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        console.log(res.data);
        
    }

    return (
      <div>
        <SectionTitle
          subHeading="What's new?"
          heading="ADD AN ITEM"
        ></SectionTitle>
        <div>
          <form
            className="m-4 bg-slate-300 p-4 md:mx-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="label">
              <span className="label-text">Pecipe Name*</span>
            </div>
            <input
              {...register("recipeName")}
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
                            defaultValue="default"
                  {...register("category")}
                  className="select select-info w-full "
                >
                  <option className="" disabled value="default">
                    Select Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="dissert">Dissert</option>
                  <option value="soups">Soups</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>
              <div>
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>

                <input
                  {...register("price", { required: true })}
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
              type="text"
              placeholder="Recipe Details"
              className="input w-full input-bordered h-20"
            />

            <input
              {...register("image")}
              type="file"
              className="file-input file-input-bordered w-full my-2"
            />

            {/* <input className="btn btn-warning w-48" type="submit"></input> */}
            <button className="btn btn-warning w-48">Submit <FaUtensils></FaUtensils></button>
          </form>
        </div>
      </div>
    );
};

export default AddItems;