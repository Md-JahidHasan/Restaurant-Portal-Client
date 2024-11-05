import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";




const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data=>setReviews(data))
    }, [])
 

    return (
        <section className="md:mx-8">
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="text-center w-5/6 md:w-8/12 mx-auto m-8 flex flex-col items-center">
                            <Rating className="py-4" style={{ maxWidth: 180 }} value={review.rating} readOnly />
                            <FaQuoteLeft className="text-6xl text-black m-6" />
                            <p className="text-center ">{ review.details }</p>
                            <h3 className="text-xl text-yellow-600 uppercase">{ review.name }</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;