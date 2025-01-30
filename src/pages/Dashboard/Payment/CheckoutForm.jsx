import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProvider";

const CheckoutForm = () => {

    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');
    const { user } = useContext(AuthContext);

     const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce(( total, item )=> total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            
        })
        }
    }, [axiosSecure, totalPrice])
    
    

    const handleSubmit = async(event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        } 

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card', 
            card
        })

        if (error) {
            console.log('[error]', error);
            setError(error.message)
    } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        
        // confirm payment
        const { paymentIntent, error: confirmCardPaymentError} = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
                email: user?.email || "annonymous",
                name: user?.displayName || "anonymous"
            },
          },
        });

        if (confirmCardPaymentError) {
            console.log("Confirm Card Payment Error");
            
        } else {
            console.log("Payment Intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                

                // Now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), //utc date convert, Use moment js to convert
                    cartId: cart.map(item => item._id),
                    menuId: cart.map(item => item.menuId),
                    status: "pending"
                };

                const res = await axiosSecure.post('/payments', payment)
                console.log("payment savced", res);
                refetch()
                
            }
            
        }


    }
    return (
      <form onSubmit={handleSubmit} className="mx-16">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
   
        <button type="submit" className="btn btn-sm btn-primary my-4" disabled={!stripe || !clientSecret}>
          Pay
            </button>
            <p className="text-red-600">
                {error}
            </p>
        
            {transactionId && <p className="text-green-600">Your Transaction Id:  { transactionId}</p>}
        
      </form>
    );
};

export default CheckoutForm;