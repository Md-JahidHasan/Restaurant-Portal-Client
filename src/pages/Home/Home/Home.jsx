import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro BOSS | Home</title>
            </Helmet>

            <Banner></Banner>
            <Catagory></Catagory>
            <PopularItems></PopularItems>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;