import styles from './CartItem.module.css';
import Button from '../../UI/Button';



const CartItem=(props)=> {
  
  const reduceHandler = ()=>{
    props.onReduce(props.Name)
  }
  const increaseHandler = ()=>{
    props.onIncrease(props.Name)
  }
  return(
    <li className={styles.Item}>
        <div>
            <h4>{props.Name}</h4>
            <div className={styles.PriceAmount}>
        <p className={styles.Price}>{props.Price}</p>
        <p className={styles.Amount}>{`x${props.Amount}`}</p>
      </div>
        </div>
        <Button className={styles.buttons} onClick={reduceHandler}>-</Button>
        <Button className={styles.buttons} onClick={increaseHandler}>+</Button>
        </li>
  )
   
  
}

export default CartItem;
