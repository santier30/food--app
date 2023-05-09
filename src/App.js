import './App.css';
import Header from './Components/Header/Header';
import Presentation from './Components/Presentation/Presentation';
import Menu from './Components/Menu/Menu';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Background/Footer';
import Images from './Components/Background/Image';
import CartContext from './Components/Cart/CartContext';
import useHeader from './hooks/use-header';
import useCart from './hooks/use-cart';

function App() {


const [cartItems,addToCartHandler,reduce,increase]=useCart();
const [cartDisplay, displayCartHandler, contador]= useHeader(cartItems);

  return (
    <CartContext.Provider value={{onAdd:addToCartHandler}} >
    {cartDisplay && <Cart cartItem={cartItems} onIncrease={increase} onReduce={reduce} onClick={displayCartHandler}/>}
  <Header onClick={displayCartHandler} counterNumber={contador} />
  <Images/>
  <Presentation/>
  <Menu />
  <Footer/>
  </CartContext.Provider >
  )
   
  
}

export default App;
