import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import image from "../../../assets/menu/banner3.jpg";
import PopularItems from "../../Home/PopularItems/PopularItems";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro BOSS | Menu</title>
      </Helmet>

      {/* ======Main Cover===== */}

      <Cover
        image={image}
        title="OUR MENU"
        subTitle="Would You Like To Try A Dish?"
      ></Cover>

      <SectionTitle
        subHeading="Don't miss"
        heading="Tosays Offer"
      ></SectionTitle>

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
