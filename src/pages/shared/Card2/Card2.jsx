const Card2 = ({ item }) => {
  const { image, name, email, instructor_name, available_seats, price } = item;

  return (
    <div
      className={`card lg:card-side ${
        available_seats === 0 ? "bg-red-500" : "bg-neon-blue"
      } shadow-xl mb-8 p-8`}
    >
      <figure className="w-2/3">
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {email && <p>{email}</p>}
        {instructor_name && <p>{instructor_name}</p>}
        {available_seats !== undefined && <p>Seats: {available_seats}</p>}
        {price && (
          <>
            <p>Price: {price}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-info"
                disabled={available_seats === 0 ? true : false}
              >
                Select
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card2;
