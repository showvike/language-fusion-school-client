import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const { user, loading } = useAuth();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-showvike.vercel.app/payments?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, [user, loading]);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-white">
            <th>Class Name</th>
            <th>Email</th>
            <th>Transaction ID</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <>
              <tr>
                <th>{item.itemName}</th>
                <td>{item.email}</td>
                <td>{item.transactionId}</td>
                <td>{item.price}</td>
                <td>{item.date}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
