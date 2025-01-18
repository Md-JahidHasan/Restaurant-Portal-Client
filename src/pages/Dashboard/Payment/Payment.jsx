import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(
  "pk_test_51M6CREBmdpOIAhB7eeN7TxCrwg7sUsxBtzlCUr3Q29allk73YQohJSMc0kkKy6kDBRFUAJLrS8wQZwSTWgUxAoeO00ClryFqWd"
);
const Payment = () => {
    
    return (
        <div>
            <SectionTitle subHeading='Please Pay To Eat' heading='Payment'></SectionTitle>

           

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;