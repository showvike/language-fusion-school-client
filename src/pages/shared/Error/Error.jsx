import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-error-texture h-screen bg-no-repeat bg-cover flex flex-col justify-center items-center space-y-16">
      <Link to="/">
        <button className="btn btn-primary">Back To Home</button>
      </Link>
      <h1 className="font-bold text-9xl">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="font-medium text-5xl">
        <i>{error.statusText}</i>: <i>{error.status}</i>
      </p>
    </div>
  );
};

export default Error;
