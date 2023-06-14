import { useQuery } from "@tanstack/react-query";
import Tables from "../../shared/Tables/Tables";

const ManageClasses = () => {
  const { refetch, data: totalClasses = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        "https://b7a12-summer-camp-server-side-showvike.vercel.app/classes"
      );
      return res.json();
    },
  });
  const heading = "Total Classes";

  return <Tables items={totalClasses} heading={heading} refetch={refetch} />;
};

export default ManageClasses;
