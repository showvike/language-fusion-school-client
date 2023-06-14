import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
  const { id } = useParams();
  const textareaRef = useRef(null);
  const navigate = useNavigate();

  const handleSend = (id) => {
    console.log(id);
    fetch(
      `https://b7a12-summer-camp-server-side-showvike.vercel.app/classes/${id}?feedback=${textareaRef.current.value}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Feedback sended!`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/manage-classes");
        }
      });
  };

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-5xl">Feedback</h1>
      <textarea
        placeholder="feedback"
        className="textarea textarea-bordered textarea-lg w-full max-w-xs text-black"
        ref={textareaRef}
      ></textarea>
      <button onClick={() => handleSend(id)} className="btn">
        Send
      </button>
    </div>
  );
};

export default Feedback;
