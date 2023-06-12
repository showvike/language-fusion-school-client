import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import Join from "../Join/Join";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Classes />
      <Instructors />
      <Join />
    </div>
  );
};

export default Home;
