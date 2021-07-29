import {useContext, useState} from "react";
import axios from "axios";

import AppContext from "../../context";

import Cart from "./Cart";
import Info from "./Info";

import styles from './Drawer.module.scss'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default ({ onClose, items, onRemove, opened }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const onClickOrder = async () => {
    setIsLoading(true);
    try {
      const responseOrders = await axios.post('https://6101a15749a5370017871226.mockapi.io/orders', { items: cartItems });
      setOrderId(responseOrders.data.id)
      setIsOrderComplete(true);
      setCartItems([]);
      for (const cartItem of cartItems) {
        await axios.delete(`https://6101a15749a5370017871226.mockapi.io/cart/${cartItem.id}`);
        await delay(1000);
      }
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false);
  }
  return (
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
        <div className={`d-flex flex-column ${styles.drawer}`}>
          {items.length
            ? <Cart items={items} onClose={onClose} onRemove={onRemove} onClickOrder={onClickOrder} isLoading={isLoading}/>
            : <Info
              title={isOrderComplete ? 'Заказ оформлен!' : 'Корзину пустая'}
              imageUrl={`img/${isOrderComplete ? 'complete-order' : 'empty-cart'}.jpg`}
              description={
                isOrderComplete
                  ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                  : 'Добавьте хотя бы одну пару кроссовок, чтоы сделать заказ'
              }
            />}
        </div>
      </div>
  )
}
