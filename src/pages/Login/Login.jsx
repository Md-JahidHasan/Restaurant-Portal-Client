import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Succeed",
        text: "User Login Successful!",
        icon: "",
      });
      navigate(from, { replace: true });
    });
    console.log(email, password);
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const userCaptchaValue = e.target.value;
    console.log(userCaptchaValue);

    if (validateCaptcha(userCaptchaValue) === true) {
      setDisabled(false);
    } else {
      // alert("Please enter correct Captcha");
      setDisabled(true);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left m-8">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 m-10 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* ==========RECAPTCHA============ */}
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate></LoadCanvasTemplate>
              </label>
              <input
                type="text"
                onBlur={handleValidateCaptcha}
                name="captcha"
                placeholder="Type the text above"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center mb-4">
            <small>
              New here?{" "}
              <Link to="/signup" className="text-blue-700">
                {" "}
                Create an account
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
