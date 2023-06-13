import useRole from "../../../hooks/useRole";
import Table from "../Table/Table";

const Tables = ({ items, heading, refetch }) => {
  const [, , role] = useRole();

  return (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">{heading}</h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              {role === "instructor" && <th>Available Seats</th>}
              <th>Price</th>
              {role === "student" && (
                <>
                  <th>Delete</th>
                  <th>Pay</th>
                </>
              )}
              {role === "instructor" && (
                <>
                  <th>Status</th>
                  <th>Total Enrolled Students</th>
                  <th>Feedback</th>
                  <th>Update</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <Table
                key={item._id}
                item={item}
                index={index}
                refetch={refetch}
                role={role}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
