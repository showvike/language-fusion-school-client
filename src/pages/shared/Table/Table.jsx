import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Table = ({ item, index, refetch, role, location }) => {
  const [disabledAdmin, setDisableAdmin] = useState(false);
  const [disabledInstructor, setDisabledInstructor] = useState(false);

  useEffect(() => {
    if (item.role === "admin") {
      setDisableAdmin(true);
      setDisabledInstructor(true);
    } else if (item.role === "instructor") {
      setDisableAdmin(false);
      setDisabledInstructor(true);
    } else if (item.role === "student") {
      setDisableAdmin(false);
      setDisabledInstructor(false);
    }
  }, [item]);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b7a12-summer-camp-server-side-showvike.vercel.app/carts/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleStatus = (item, status) => {
    fetch(
      `https://b7a12-summer-camp-server-side-showvike.vercel.app/classes/${item._id}?status=${status}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} is ${status}!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleRole = (item, role) => {
    fetch(
      `https://b7a12-summer-camp-server-side-showvike.vercel.app/users/${item._id}?role=${role}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} is ${role}!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <tr key={item._id}>
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={item.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{item.name}</td>
      {role === "admin" && location.pathname.endsWith("manage-users") && (
        <>
          <td>{item.email}</td>
          <td>{item.role}</td>
          <td>
            <button
              onClick={() => handleRole(item, "instructor")}
              className="btn btn-xs btn-warning"
              disabled={disabledInstructor}
            >
              Make Instructor
            </button>
          </td>
          <td>
            <button
              onClick={() => handleRole(item, "admin")}
              className="btn btn-xs btn-error"
              disabled={disabledAdmin}
            >
              Make Admin
            </button>
          </td>
        </>
      )}
      {role === "admin" && location.pathname.endsWith("manage-classes") && (
        <>
          <td>{item.instructor_name}</td>
          <td>{item.instructor_email}</td>
        </>
      )}
      {!location.pathname.endsWith("manage-users") && (
        <>
          {role !== "student" && <td>{item.available_seats}</td>}
          <td>${item.price}</td>
          {role === "student" && (
            <>
              <td>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={`/dashboard/payment/${item._id}`}>
                  <button className="btn btn-warning btn-sm">PAY</button>
                </Link>
              </td>
            </>
          )}
          {role !== "student" && (
            <>
              <td>{item.status}</td>
              {role === "instructor" && (
                <>
                  <td>{item?.total_enrolled_students}</td>
                  <td>{item?.feedback}</td>
                  <td>
                    <button className="btn btn-warning btn-sm">Update</button>
                  </td>
                </>
              )}
            </>
          )}
          {role === "admin" && (
            <>
              <td>
                <button
                  onClick={() => handleStatus(item, "approved")}
                  className="btn btn-xs btn-success"
                  disabled={item.status !== "pending" ? true : false}
                >
                  Approve
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleStatus(item, "denied")}
                  className="btn btn-xs btn-error"
                  disabled={item.status !== "pending" ? true : false}
                >
                  Deny
                </button>
              </td>
              <td>
                <Link
                  to={`/dashboard/manage-classes/feedback/${item._id}`}
                  className="btn btn-xs btn-warning"
                >
                  Feedback
                </Link>
              </td>
            </>
          )}
        </>
      )}
    </tr>
  );
};

export default Table;
