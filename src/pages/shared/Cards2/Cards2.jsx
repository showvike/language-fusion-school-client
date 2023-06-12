import Card2 from "../Card2/Card2";

const Cards2 = ({ heading, background, items, user, role }) => {
  return (
    <div className={`${background}`}>
      <h1 className="font-bold text-5xl text-center pt-4">{heading}</h1>
      <div className="py-8 px-24">
        {items.map((item) => (
          <Card2 key={item._id} item={item} user={user} role={role} />
        ))}
      </div>
    </div>
  );
};

export default Cards2;
