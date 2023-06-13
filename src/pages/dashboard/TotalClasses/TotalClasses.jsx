import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Tables from "../../shared/Tables/Tables";

const TotalClasses = () => {
  const { user, loading } = useAuth();
  const [totalClasses, setTotalClasses] = useState([]);

  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-showvike.vercel.app/classes?instructor_email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setTotalClasses(data));
  }, [user, loading]);

  const heading = "Total Classes";

  return <Tables items={totalClasses} heading={heading} />;
};

export default TotalClasses;
