import {  useState } from 'react';





  const useCounter =  () => {  
    const [food, setFood] = useState("1"); 
   const Counter= (event) => setFood(event.target.value)

   return {food,Counter}
     
  };

export default useCounter;
