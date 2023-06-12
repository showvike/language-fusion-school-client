import { useLoaderData } from "react-router-dom";
import Cards2 from "../../shared/Cards2/Cards2";

const AllClasses = () => {
  const classes = useLoaderData();
  const background = "bg-classes-texture";
  const heading = "Our Classes";
  return (
    <Cards2 heading={heading} background={background} instructors={classes} />
  );
};

export default AllClasses;
