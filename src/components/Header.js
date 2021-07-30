import {Link} from "react-router-dom";
import {useContext} from "react";
import AppContext from "../context";

export default ({ onOpenCart }) => {
  const { cartItems } = useContext(AppContext);
  const total = cartItems.reduce((total, { price }) => total += price, 0);

  return (
    <header className='d-flex justify-between p-40'>
      <Link to='/react-sneakers/'>
        <div className='d-flex align-center headerLeft'>
          <img src='img/logo.png' alt='logo'/>
          <div className="headerInfo">
            <h1 className='text-uppercase'>REACT SNEAKERS</h1>
            <span className='opacity-7'>Магазин лучших кроссовок</span>
          </div>
        </div>
      </Link>
      <ul className='d-flex headerRight'>
        <li className='d-flex align-center mr-30' onClick={onOpenCart}>
          <img width='20' height='20' src='img/cart.svg' alt='cart' className='mr-10'/>
          <span>{total} руб.</span>
        </li>
        <li className='mr-30'>
          <Link to='/react-sneakers/favorites'>
            <img src='img/favorite.svg' alt='favorite'style={{ verticalAlign: 'middle'}}/>
          </Link>
        </li>
        <li>
          <Link to='/react-sneakers/orders'>
            <img src='img/user.svg' alt='user' style={{ verticalAlign: 'middle'}}/>
          </Link>
        </li>
      </ul>
    </header>
  )
}
