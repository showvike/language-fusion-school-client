import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-400">
                    <small>please enter a valid password</small>
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <label className="label">
              <Link className="label-text-alt link link-hover">
                New here? Create an account! Click here.
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
