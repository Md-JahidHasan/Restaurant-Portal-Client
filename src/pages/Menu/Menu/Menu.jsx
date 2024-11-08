import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import image from "../../../assets/menu/banner3.jpg";
// import PopularItems from "../../Home/PopularItems/PopularItems";
import desertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../MenuCategory/MenuCategory";

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

      {/* ==========Main Cover======== */}
      <SectionTitle
        subHeading="Don't miss"
        heading="Tosays Offer"
      ></SectionTitle>

      {/* ====offered menu items===== */}
      <MenuCategory items={offered}></MenuCategory>

      {/* ========Dessert Items======= */}
      <MenuCategory
        items={dessert}
        title="Desserts"
        coverImage={desertImage}
        subTitle="lLorem Ipsum is simply dummy text research work"
      ></MenuCategory>

      <MenuCategory
        items={pizza}
        title="PIZZA"
        subTitle="lLorem Ipsum is simply dummy text research work"
        coverImage={pizzaImage}
      ></MenuCategory>

      <MenuCategory
        items={salad}
        title="SALAD"
        subTitle="lLorem Ipsum is simply dummy text research work.dummy text research work"
        coverImage={saladImage}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title="SOUP"
        subTitle="lLorem Ipsum is simply dummy text research work.dummy text research work"
        coverImage={soupImage}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
