import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItems/MenuItem";

const MenuCategory = ({ items, coverImage, title, subTitle }) => {
  return (
    <div>
      {title && (
        <Cover image={coverImage} title={title} subTitle={subTitle}></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 my-11 mx-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
