import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useRole = () => {
  const { user, loading } = useAuth();
  const [role, setRole] = useState();

  useEffect(() => {
    if (loading) {
      return;
    }
    fetch(
      `https://b7a12-summer-camp-server-side-showvike.vercel.app/users?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setRole(data[0]?.role));
  }, [user, loading]);

  return [user, loading, role];
};

export default useRole;
