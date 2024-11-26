import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItems/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularItems = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //     fetch('menu.json')
  //         .then(res => res.json())
  //         .then(data => {
  //             const popularItems = data.filter(item => item.category === 'popular')
  //             setMenu(popularItems )
  //         })
  // }, [ ])

  const items = useMenu();
  const popularItems = items[0].filter((item) => item.category === "popular");
  // console.log(items[0]);

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"From Our Menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
