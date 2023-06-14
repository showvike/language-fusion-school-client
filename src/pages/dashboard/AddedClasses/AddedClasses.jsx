import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Tables from "../../shared/Tables/Tables";

const AddedClasses = () => {
  const { user, loading } = useAuth();
  const [addedClasses, setAddedClasses] = useState([]);

  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-showvike.vercel.app/classes?instructor_email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setAddedClasses(data));
  }, [user, loading]);

  const heading = "Total Classes";

  return <Tables items={addedClasses} heading={heading} />;
};

export default AddedClasses;
