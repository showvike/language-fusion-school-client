import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { user } = useAuth();

  useEffect(() => {
    reset({ instructor_name: user.displayName, instructor_email: user.email });
  }, [reset, user]);

  const onSubmit = (data) => {
    console.log(data);
    if (user && user.email) {
      const classItem = { ...data, status: "pending" };
      fetch(
        "https://b7a12-summer-camp-server-side-showvike.vercel.app/classes",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(classItem),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="hero min-h-screen bg-login-texture bg-no-repeat bg-cover">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Add a Class</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-light-steel-blue">
          <div className="card-body text-black">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  placeholder="class name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-400">
                    <small>please enter a valid class name</small>
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Image</span>
                </label>
                <input
                  type="text"
                  placeholder="class image"
                  className="input input-bordered"
                  {...register("image", { required: true })}
                />
                {errors.image?.type === "required" && (
                  <p className="text-red-400">
                    <small>please enter a valid class image</small>
                  </p>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  placeholder="instructor name"
                  className="input input-bordered"
                  defaultValue={user.displayName}
                  disabled
                  {...register("instructor_name")}
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  type="text"
                  placeholder="instructor email"
                  className="input input-bordered"
                  defaultValue={user.email}
                  disabled
                  {...register("instructor_email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <input
                  type="text"
                  placeholder="available seats"
                  className="input input-bordered"
                  {...register("available_seats", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                {errors.available_seats?.type === "required" && (
                  <p className="text-red-400">
                    <small>please enter a valid available seats</small>
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  {...register("price", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                {errors.price?.type === "required" && (
                  <p className="text-red-400">
                    <small>please enter a valid price</small>
                  </p>
                )}
              </div>
              <div className="form-control mt-6 col-span-2">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Add Class"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
