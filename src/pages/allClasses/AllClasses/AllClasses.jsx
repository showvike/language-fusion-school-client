import { useLoaderData } from "react-router-dom";
import useRole from "../../../hooks/useRole";
import Cards2 from "../../shared/Cards2/Cards2";

const AllClasses = () => {
  const classes = useLoaderData();
  const [user, , role] = useRole();
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
