import Swal from "sweetalert2";

const Table = ({ item, index, refetch, role }) => {
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
      {role === "instructor" && <td>{item.available_seats}</td>}
      <td>${item.price}</td>
      {role === "students" && (
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
            <button className="btn btn-warning btn-sm">PAY</button>
          </td>
        </>
      )}
      {role === "instructor" && (
        <>
          <td>{item.status}</td>
          <td>{item?.total_enrolled_students}</td>
          <td>{item?.feedback}</td>
          <td>
            <button className="btn btn-warning btn-sm">Update</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default Table;
