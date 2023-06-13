import Cards from "../../shared/Cards/Cards";

const Instructors = () => {
  const api =
    "https://b7a12-summer-camp-server-side-showvike.vercel.app/users?role=instructor&limit=6";
  const background = "bg-instructors-texture";
  const heading = "Popular Instructors";

  return <Cards api={api} background={background} heading={heading} />;
};

export default Instructors;
