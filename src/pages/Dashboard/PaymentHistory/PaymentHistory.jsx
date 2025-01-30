import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { data: payments=[]} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    
    return (
        <div>
            <h2>Total Payments: { payments.length}</h2>
        </div>
    );
};

export default PaymentHistory;