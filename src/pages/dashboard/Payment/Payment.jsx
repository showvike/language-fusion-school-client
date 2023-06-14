import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const { id } = useParams();
  const [cart] = useCart();

  const item = cart.find((itm) => itm._id === id);

  const price = item?.price;

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm item={item} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
