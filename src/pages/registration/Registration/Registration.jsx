import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, userUpdate } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userUpdate(data.name, data.photo_url)
          .then(() => {
            console.log("user updated successfully");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Registration successful",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
            navigate(0);
          })
          .catch((error) => {
            const message = error.message;
            console.log(message);
          });
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <div className="hero min-h-screen bg-login-texture bg-no-repeat bg-cover">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            To explore more, please register with your name, email, password &
            photo url . Learn new languages. Fill up your bucket and go on.
            Thank you for choosing us.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-light-steel-blue">
          <div className="card-body text-black">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-400">
                    <small>please enter a valid name</small>
                  </p>
                )}
              </div>
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
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[\W_]).+$/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-400">
                    <small>please enter a valid password</small>
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-400">
                    <small>password must be six or more character long</small>
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-400">
                    <small>
                      password must have one uppercase and special character
                    </small>
                  </p>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  {...register("confirm_password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[\W_]).+$/,
                  })}
                />
                {errors.confirm_password?.type === "required" && (
                  <p className="text-red-400">
                    <small>please enter a valid confirm password</small>
                  </p>
                )}
                {errors.confirm_password?.type === "minLength" && (
                  <p className="text-red-400">
                    <small>
                      confirm password must be six or more character long
                    </small>
                  </p>
                )}
                {errors.confirm_password?.type === "pattern" && (
                  <p className="text-red-400">
                    <small>
                      confirm password must have one uppercase and special
                      character
                    </small>
                  </p>
                )}
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  {...register("photo_url", { required: true })}
                />
                {errors.photo_url?.type === "required" && (
                  <p className="text-red-400">
                    <small>please enter a valid photo url</small>
                  </p>
                )}
              </div>
              <div className="form-control mt-6 col-span-2">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already have an account? For Login! Click here.
              </Link>
            </label>
            <SocialLogin page="Register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
