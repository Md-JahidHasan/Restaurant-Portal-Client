import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item pt-8 text-white ">
            <SectionTitle
                subHeading={"Check It Out"}
                heading={"Featured Item"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center pb-12 pt-8 md:px-36 bg-slate-400 bg-opacity-30">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="ml-10 text-white ">
                    <p className="text-xl">Nov 02, 2024</p>
                    <p className="uppercase text-xl">Where Can I Get Some ?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit sit deleniti illo atque incidunt officia dolorum id veniam sequi molestiae non, numquam ut cum, nostrum sunt eveniet quisquam ex esse ducimus optio eum obcaecati doloremque nesciunt officiis.</p>
                    <button className="btn btn-outline text-white my-1 border-0 border-b-4 shadow-md">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;