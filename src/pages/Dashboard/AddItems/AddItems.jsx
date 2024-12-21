import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

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
                  {...register("category")}
                  className="select select-info w-full "
                >
                  <option className="" disabled selected>
                    Select language
                  </option>
                  <option>English</option>
                  <option>Japanese</option>
                  <option>Italian</option>
                </select>
              </div>
              <div>
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>

                <input
                  {...register("price")}
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
              {...register("file")}
              type="file"
              className="file-input file-input-bordered w-full my-2"
            />

            <input className="btn btn-warning w-48" type="submit"></input>
          </form>
        </div>
      </div>
    );
};

export default AddItems;