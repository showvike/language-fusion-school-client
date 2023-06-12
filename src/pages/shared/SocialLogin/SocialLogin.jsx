import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const SocialLogin = ({ page }) => {
  const { googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const savedUser = {
          name: user.displayName,
          email: user.email,
          role: "student",
        };
        fetch(
          "https://b7a12-summer-camp-server-side-showvike.vercel.app/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${page} successful`,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          });
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
        <p className="font-medium">{page} With Google</p>
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
