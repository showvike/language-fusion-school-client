import { Fade } from "react-awesome-reveal";

const Card = ({ card }) => {
  const { image, name } = card;
  const words = name.split(" ");

  return (
    <div className="card md:w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <Fade className="flex flex-col gap-4" triggerOnce>
          <div>
            <h2 className="card-title text-3xl">{words[0]}</h2>
            <h2 className="card-title">
              <small>{words[1]}</small>
            </h2>
          </div>
          <h2 className="card-title self-end text-3xl">{words[2]}</h2>
        </Fade>
      </div>
    </div>
  );
};

export default Card;
