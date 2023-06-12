const Card = ({ card }) => {
  const { image, name } = card;
  const words = name.split(" ");

  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body flex flex-col justify-center gap-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div>
          <h2 className="card-title text-3xl">{words[0]}</h2>
          <h2 className="card-title">
            <small>{words[1]}</small>
          </h2>
        </div>
        <h2 className="card-title self-end text-3xl">{words[2]}</h2>
      </div>
    </div>
  );
};

export default Card;
