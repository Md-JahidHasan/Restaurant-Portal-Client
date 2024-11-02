import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularItems = () => {

    const [menu, setMenu] = useState();
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems )
            })
    }, [])

console.log("asdfd",menu);


    return (
        <section>


            <SectionTitle
                subHeading={"Check It Out"}
                heading={"From Our Menu"}
            >
            </SectionTitle>


            


        </section>
    );
};

export default PopularItems;