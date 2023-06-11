import { useEffect, useState } from "react";
import Card from "../../shared/Card/Card";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-showvike.vercel.app/classes?type=popular&limit=6"
    )
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="h-screen bg-classes-texture">
      <h1 className="font-bold text-5xl text-center pt-4">Popular Classes</h1>
      <div className="pt-8 grid grid-cols-3 px-8 justify-items-center gap-8">
        {classes.map((course) => (
          <Card key={course._id} item={course} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
