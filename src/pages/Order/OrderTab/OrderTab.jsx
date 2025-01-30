import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div
      className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-2  lg:gap-4 mx-12
          "
    >
      {items.map((d) => (
        <FoodCard
          key={d._id}
          _id= {d._id}
          image={d.image}
          name={d.name}
          title={d.recipe}
          price={d.price}
          item={d}
        ></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
