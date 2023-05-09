import styles from "./Header.module.css";
import Button from "../../UI/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useEffect, useState } from "react";

const Header = (props) => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 1000);
  }, [props.cartItem]);
  return (
    <header className={styles.Head}>
      <h1>ReactMeals</h1>
      
      <Button key={props.counterNumber} onClick={props.onClick}>
        <AiOutlineShoppingCart className={`${styles.icon}`} />
        <p>Your cart</p> <p className={styles.cont}>{props.counterNumber}</p>
        <div className={`${animation ? styles.Add : ""}`}></div>
      </Button>
      
    </header>
  );
};

export default Header;
