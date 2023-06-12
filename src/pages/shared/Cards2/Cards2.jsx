import Card2 from "../Card2/Card2";

const Cards2 = ({ heading, background, instructors }) => {
  return (
    <div className={`${background}`}>
      <h1 className="font-bold text-5xl text-center pt-4">{heading}</h1>
      <div className="py-8 px-24">
        {instructors.map((instructor) => (
          <Card2 key={instructor._id} item={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Cards2;
