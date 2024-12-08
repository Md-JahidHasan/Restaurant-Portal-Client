import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic= useAxiosPublic()
    const navigate = useNavigate()

    const location = useLocation();
    const from = location?.state?.from.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: result?.user?.displayName,
                    email: result?.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        
                })
                
                navigate(from)
        })
    }


    return (
      <div className="text-center">
        <div className="divider w-full mt-[-10px]"></div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-8/12">
          <FaGoogle></FaGoogle>
          Google
        </button>
      </div>
    );
};

export default SocialLogin;