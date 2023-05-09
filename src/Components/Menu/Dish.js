import styles from './Dish.module.css';
import Button from '../../UI/Button';
import CartContext from '../Cart/CartContext';
import { useContext } from 'react';
import useCounter from '../../hooks/useCounter';


const Dish=(props)=> {
  const {food , Counter}=useCounter();

  const ctx = useContext(CartContext)
const Add = (event)=>{
event.preventDefault();
ctx.onAdd(props.Name,props.Info,props.Price,food)
}
  return (
    <li className={styles.Item}>
        <div>
            <h4>{props.Name}</h4>
            <p className={styles.Info}>{props.Info}</p>
            <p className={styles.Price}>{`$${props.Price}`}</p>
        </div>
        <form onSubmit={Add}>
          <div>
            <label htmlFor="">Amount</label>
            <input type="number" value={food} onChange={Counter} min={1}/>
          </div>
            <Button type="submit" >+ Add</Button>
        </form>
    </li>
  )
   
  
}

export default Dish;
