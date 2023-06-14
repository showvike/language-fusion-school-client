import { useQuery } from "@tanstack/react-query";
import Tables from "../../shared/Tables/Tables";

const ManageUsers = () => {
  const { refetch, data: totalUsers = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://b7a12-summer-camp-server-side-showvike.vercel.app/users"
      );
      return res.json();
    },
  });
  const heading = "Total Users";

  return <Tables items={totalUsers} heading={heading} refetch={refetch} />;
};

export default ManageUsers;
