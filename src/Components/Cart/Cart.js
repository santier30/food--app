import styles from './Cart.module.css';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import CartItem from './CartItem';
import React, {useState} from 'react';
import BasicForm from '../Form/Form';
import useInput from '../../hooks/useInput';
import useFetch from '../../hooks/use-fetch';


const Cart = (props) => {
  const {isLoading ,error ,sendRequest:fetchTasks} = useFetch();
  const [display,setDispley] = useState(false);


  const [
    enteredName,
    nameIsValid,
    inputNameValidation,
    nameInputClasses,
    nameHandler,
    nameValidationHandler,
    nemeResetHandler,
  ] = useInput((input) => input.trim().length === 0);

  const [
    enteredSurName,
    surNameIsValid,
    inputSurNameValidation,
    surNameInputClasses,
    surNameHandler,
    surNameValidationHandler,
    surNemeResetHandler,
  ] = useInput((input) => input.trim().length === 0);

  const [
    enteredMail,
    mailIsValid,
    inputMailValidation,
    mailInputClasses,
    mailHandler,
    mailValidationHandler,
    mailResetHandler,
  ] = useInput((input) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return !emailRegex.test(input.trim());
  });

  let formValidation = false;
  if (nameIsValid && mailIsValid && surNameIsValid) {
    formValidation = true;
  }
  const inCartFood = props.cartItem
  .filter((dish) => dish.Amount > 0);
const total = props.cartItem.reduce((total, item) => {
    return total + parseFloat(item.Price) * +item.Amount;
  }, 0);


  const submitHandler = (event) => {
    event.preventDefault();
    if(!display){setDispley(true); return}
    nameValidationHandler();
    mailValidationHandler();
    surNameValidationHandler();
    if (formValidation) {
    

      fetchTasks({
        url:'https://custom-hooks-8834c-default-rtdb.firebaseio.com/orders.json',
        method: 'POST',
        body: JSON.stringify({ 
          
          
    
          Name: enteredName,
          Mail: enteredMail,
          Address:enteredSurName,
          Order: inCartFood.map((order) => {return {Amount:order.Amount ,Dish:order.Name}}),
          Price: total.toFixed(2)
          
          
      
      
      }),
        headers: {
              'Content-Type': 'application/json',
            },
    },(data)=>console.log(data));
      nemeResetHandler();
      mailResetHandler();
      surNemeResetHandler();
      setDispley(false)
    }
    
  };

  const basicFormProps = {
    enteredName,
    nameIsValid,
    inputNameValidation,
    nameInputClasses,
    nameHandler,
    nameValidationHandler,
    nemeResetHandler,
    enteredSurName,
    surNameIsValid,
    inputSurNameValidation,
    surNameInputClasses,
    surNameHandler,
    surNameValidationHandler,
    surNemeResetHandler,
    enteredMail,
    mailIsValid,
    inputMailValidation,
    mailInputClasses,
    mailHandler,
    mailValidationHandler,
    mailResetHandler,
    
  };

  

  return (
    <div className={styles.back}>
      <Card className={styles.cart}>
        <ul className={styles.cont}>
          {inCartFood.map((dish) => (
              <CartItem
                Name={dish.Name}
                Price={dish.Price}
                Amount={dish.Amount}
                key={Math.random()}
                onIncrease={props.onIncrease}
                onReduce={props.onReduce}
              />
            ))}
        </ul>
        <div className={styles.UlCont}>
          <h2>Total Amount</h2>
          <div className={styles.TotalCont}>
            <h2>{`$${total.toFixed(2)}`}</h2>
            <div className={styles.buttonsCont}>
       
            
            </div>
          </div>
        </div>
        <form onSubmit={submitHandler}>
        {display && <BasicForm {...basicFormProps} />}
        <div><Button className={styles.close} onClick={props.onClick}>
                Close
              </Button>
              <Button className={styles.order} type="submit" >
                Order
              </Button></div>
        </form>
      </Card>
    </div>
  );
};
export default Cart;