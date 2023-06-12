import Cards from "../../shared/Cards/Cards";

const Classes = () => {
  const api =
    "https://b7a12-summer-camp-server-side-showvike.vercel.app/classes?type=popular&limit=6";
  const background = "bg-classes-texture";
  const heading = "Popular Classes";

  return <Cards api={api} background={background} heading={heading} />;
};

export default Classes;
