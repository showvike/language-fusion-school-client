import useCart from "../../../hooks/useCart";
import Tables from "../../shared/Tables/Tables";

const SelectedClasses = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const heading = "Selected Classes";

  return <Tables cart={cart} heading={heading} refetch={refetch} />;
};

export default SelectedClasses;
