import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-showvike-showvike.vercel.app/db"
    )
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <>{<button className="btn btn-lg btn-wide">{message}</button>}</>;
}

export default App;
