import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Cards2 from "../../shared/Cards2/Cards2";

const AllClasses = () => {
  const classes = useLoaderData();
  const { user, loading } = useAuth();
  const [role, setRole] = useState();

  useEffect(() => {
    if (loading) {
      return;
    }
    fetch(
      `https://b7a12-summer-camp-server-side-showvike.vercel.app/users?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setRole(data[0]?.role));
  }, [user, loading]);

  const background = "bg-classes-texture";
  const heading = "Our Classes";

  return (
    <Cards2
      heading={heading}
      background={background}
      items={classes}
      user={user}
      role={role}
    />
  );
};

export default AllClasses;
