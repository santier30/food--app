import React,{ useState, useEffect } from "react";
import styles from "./Menu.module.css";
import Card from "../../UI/Card";
import Dish from "./Dish";
import useFetch from "../../hooks/use-fetch";

const Menu = () => {

  const [menu, setMenu] = useState([]);

  const transformMenu = (taskObj) => {
    const loadedTasks = [];

    for (const taskKey in taskObj) {
      loadedTasks.push({ 
        id: taskKey, 
        Info:taskObj[taskKey].Info,
        Name:taskObj[taskKey].Name,
        Price:taskObj[taskKey].Price,
        key:taskObj[taskKey].key,
        value:taskObj[taskKey].value
         });
    }
    console.log(loadedTasks)
    setMenu(loadedTasks);
  };

  const {isLoading ,error ,sendRequest:fetchMenu} = useFetch(
    
  );
  useEffect(() => {
    fetchMenu({
      url: "https://custom-hooks-8834c-default-rtdb.firebaseio.com/tasks.json",
    },
    transformMenu);
  }, [fetchMenu]);


  

  return (
    <Card className={styles.Menu}>
      <ul>
        {menu.map((dish) => {
          return (
            <Dish
              Name={dish.Name}
              Info={dish.Info}
              Price={dish.Price}
              key={dish.id}
              
              
            />
          );
        })}
        {isLoading  && <p >Loading...</p>}
        {error  && <p >{error}</p>}
      </ul>
    </Card>
  );
};

export default React.memo(Menu);
