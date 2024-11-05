import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import image from "../../../assets/menu/banner3.jpg";
import PopularItems from "../../Home/PopularItems/PopularItems";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro BOSS | Menu</title>
      </Helmet>
      <h2>Menu</h2>
      <Cover
        image={image}
        title="OUR MENU"
        subTitle="Would You Like To Try A Dish?"
      ></Cover>
      <PopularItems></PopularItems>
      <Cover
        image={image}
        title="OUR MENU"
        subTitle="Would You Like To Try A Dish?"
      ></Cover>
      <PopularItems></PopularItems>
      <Cover
        image={image}
        title="OUR MENU"
        subTitle="Would You Like To Try A Dish?"
      ></Cover>
      <PopularItems></PopularItems>
    </div>
  );
};

export default Menu;
