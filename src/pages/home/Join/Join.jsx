import { Slide } from "react-awesome-reveal";
import join from "../../../assets/join.png";

const Join = () => {
  return (
    <div className="bg-join-texture md:h-screen">
      <h1 className="font-bold text-5xl text-center pt-4">Join Us</h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Slide direction="right" delay={1000} triggerOnce>
            <img src={join} className="md:max-w-sm rounded-lg shadow-2xl" />
          </Slide>
          <div className="md:w-1/2">
            <Slide cascade triggerOnce>
              <h1 className="md:text-5xl font-bold">Join</h1>
              <h1 className="mt-8 md:text-5xl font-bold">
                Language Fusion School
              </h1>
              <p className="py-6 font-medium text-justify">
                Join Language Fusion School to embark on a journey of language
                learning and cultural exploration. Whether you are a beginner or
                an advanced learner, our comprehensive programs cater to all
                proficiency levels. Immerse yourself in a supportive and
                interactive learning environment, where you can enhance your
                language skills, broaden your horizons, and connect with a
                global community of language enthusiasts. At Language Fusion
                School, we believe that learning a new language is not just
                about words, but about understanding diverse cultures and
                fostering meaningful connections. Come join us and unlock the
                doors to a world of linguistic and cultural possibilities.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
