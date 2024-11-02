import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import PopularItems from "../PopularItems/PopularItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularItems></PopularItems>
        </div>
    );
};

export default Home;