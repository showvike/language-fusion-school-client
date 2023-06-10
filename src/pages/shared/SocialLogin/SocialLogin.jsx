import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <>
      <div className="divider"></div>
      <div className="grid grid-cols-2 items-center justify-items-center">
        <p className="font-medium">Login With Google</p>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-square bg-neon-blue text-white hover:text-black"
        >
          <FaGoogle />
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
