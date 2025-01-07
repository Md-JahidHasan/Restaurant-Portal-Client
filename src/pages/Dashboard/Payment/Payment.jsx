import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe("");
const Payment = () => {
    
    return (
        <div>
            <SectionTitle subHeading='Please Pay To Eat' heading='Payment'></SectionTitle>

            Payment Page

            <Elements stripe={stripePromise}></Elements>
        </div>
    );
};

export default Payment;