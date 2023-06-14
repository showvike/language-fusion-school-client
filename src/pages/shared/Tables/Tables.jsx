import { useLocation } from "react-router-dom";
import useRole from "../../../hooks/useRole";
import Table from "../Table/Table";

const Tables = ({ items, heading, refetch }) => {
  const [, , role] = useRole();
  const location = useLocation();

  return (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">{heading}</h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table table-xs w-full">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              {role === "admin" &&
                location.pathname.endsWith("manage-users") && (
                  <>
                    <th>email</th>
                    <th>role</th>
                    <th>Make Instructor</th>
                    <th>Make Admin</th>
                  </>
                )}
              {role === "admin" &&
                location.pathname.endsWith("manage-classes") && (
                  <>
                    <th>Ins Name</th>
                    <th>Ins Email</th>
                  </>
                )}
              {!location.pathname.endsWith("manage-users") && (
                <>
                  {role !== "student" && <th>Available Seats</th>}
                  <th>Price</th>
                  {role === "student" && (
                    <>
                      <th>Delete</th>
                      <th>Pay</th>
                    </>
                  )}
                  {role !== "student" && (
                    <>
                      <th>Status</th>
                      {role === "instructor" && (
                        <>
                          <th>Total Enrolled Students</th>
                          <th>Feedback</th>
                          <th>Update</th>
                        </>
                      )}
                    </>
                  )}
                  {role === "admin" && (
                    <>
                      <th>Approve</th>
                      <th>Deny</th>
                      <th>Feedback</th>
                    </>
                  )}
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
                location={location}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
