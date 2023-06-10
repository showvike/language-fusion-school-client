import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Login = () => {
  const [type, setType] = useState(0);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleEye = (event) => {
    event.preventDefault();
    setType(!type);
  };

  const onSubmit = (data) => {
    console.log(data);
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
        setError(message);
      });
  };

  return (
    <div className="hero min-h-screen bg-login-texture bg-no-repeat bg-cover">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            To explore more, please login with your email & password. Learn new
            languages. Fill up your bucket and go on. Thank you for choosing us.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-light-steel-blue">
          <div className="card-body text-black">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-400">
                    <small>please enter a valid email</small>
                  </p>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={type ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <button
                  onClick={handleEye}
                  className="absolute bottom-4 right-4"
                >
                  {type ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-400">
                  <small>please enter a valid password</small>
                </p>
              )}
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
                {error && (
                  <p className="text-red-400">
                    <small>{error}</small>
                  </p>
                )}
              </div>
            </form>
            <label className="label">
              <Link
                to="/registration"
                className="label-text-alt link link-hover"
              >
                New here? Create an account! Click here.
              </Link>
            </label>
            <SocialLogin page="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
