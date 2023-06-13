import useCart from "../../../hooks/useCart";
import Tables from "../../shared/Tables/Tables";

const SelectedClasses = () => {
  const [cart] = useCart();
  console.log(cart);
  const heading = "Selected Classes";

  return <Tables cart={cart} heading={heading} />;
};

export default SelectedClasses;
