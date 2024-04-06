import Button from "./Button";

import LeftArrow from "../assests/images/left-arrow.png";
import RightArrow from "../assests/images/right-arrow.png";
import AppleBasket from "./AppleBasket";

import "./Apple.css";

const AppleCounter = () => {
  return (
    <section>
      <AppleBasket appleCount={10} basketName="Basket 1" />
      <Button imageUrl={LeftArrow} />
      <Button imageUrl={RightArrow} />
      <AppleBasket appleCount={0} basketName="Basket 2" />
    </section>
  );
};

export default AppleCounter;
