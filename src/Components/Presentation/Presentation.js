import styles from "./Presentation.module.css"
import Card from "../../UI/Card";
import React from "react";

const Presentation=()=> {
  return (
    <Card className={styles.Presentation}>
        <h2>Delicious Food, Delivered to you</h2>
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs</p>
  
  </Card>
  )
   
  
}

export default React.memo(Presentation);
