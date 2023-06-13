import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Card2 = ({ item, user, role }) => {
  const { image, name, email, instructor_name, available_seats, price, _id } =
    item;
  const navigate = useNavigate();

  const handleSelect = () => {
    if (user && user.email) {
      const cartItem = { classId: _id, name, image, price, email: user.email };
      fetch("https://b7a12-summer-camp-server-side-showvike.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
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
    } else if (!user) {
      Swal.fire({
        title: "Log In!",
        text: "Please log in before selecting the course!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log In!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div
      className={`card lg:card-side ${
        available_seats === 0 ? "bg-red-500" : "bg-neon-blue"
      } shadow-xl mb-8 p-8`}
    >
      <figure className="w-2/3">
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {email && <p>{email}</p>}
        {instructor_name && <p>{instructor_name}</p>}
        {available_seats !== undefined && <p>Seats: {available_seats}</p>}
        {price && (
          <>
            <p>Price: ${price}</p>
            <div className="card-actions justify-end">
              <button
                onClick={handleSelect}
                className="btn btn-info"
                disabled={
                  available_seats === 0 ||
                  role === "admin" ||
                  role === "instructor"
                    ? true
                    : false
                }
              >
                Select
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card2;
