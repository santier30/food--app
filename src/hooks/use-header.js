import { useState } from "react";

const useHeader=(cartItems)=>{
    const[cartDisplay,setCartDisplay] =useState(false);

    const displayCartHandler = ()=>{
      if(!cartDisplay){setCartDisplay(true);}else{setCartDisplay(false)};
    };
    const contador = cartItems.reduce((total, item) => {
        return total + item.Amount;
      }, 0)
      return [cartDisplay, displayCartHandler,contador]
};
export default useHeader;