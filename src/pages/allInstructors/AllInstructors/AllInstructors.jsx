import { useLoaderData } from "react-router-dom";
import Cards2 from "../../shared/Cards2/Cards2";

const AllInstructors = () => {
  const instructors = useLoaderData();
  const background = "bg-instructors-texture";
  const heading = "Our Instructors";

  return (
    <Cards2 heading={heading} background={background} items={instructors} />
  );
};

export default AllInstructors;
